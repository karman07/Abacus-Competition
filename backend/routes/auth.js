const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'karman';

router.post('/createuser', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
  body('level', 'Level is required')
], async (req, res) => {


  const errors = validationResult(req);

  if (!errors.isEmpty()) {

    return res.status(400).json({ errors: errors.array() });

  }
  try {
  
    let user = await User.findOne({ email: req.body.email });

    if (user) {

      return res.status(400).json({ success: false, error: "Sorry a user with this email already exists" })

    }
    const salt = await bcrypt.genSalt(10);
    
    const secPass = await bcrypt.hash(req.body.password, salt);

    const name = req.body.name;
    const level = req.body.level;
   
    user = await User.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email,
      level: req.body.level
    });
    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);


    // res.json(user)
    res.json({ success: true,authtoken, name: name, level: level })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})



router.post('/login', [
  body('name', 'Enter a valid name').exists(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
  let success = false;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, password } = req.body;
  try {
    let user = await User.findOne({ name });
    if (!user) {
      success = false
      return res.status(400).json({success, error: "Please try to login with correct credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false
      return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    }

    const data = {
      user: {
        id: user.id
      }
    }

    // const level = {
    //   user:{
    //     level: user.level
    //   }
    // }

    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success: success, authtoken : authtoken, name: name,level: user.level})

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }


});


// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.post('/getuser', fetchuser,  async (req, res) => {

  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

router.get('/getusers', async(req, res) => {
  try {
    const entries = await User.find();
    res.json(entries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

module.exports = router