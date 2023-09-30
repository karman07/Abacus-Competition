const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const User = require('../models/Result');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Result = require('../models/Result');

router.post('', async(req, res) =>{
    let success = false;

    try{
        const result = await Result.create({
            name: req.body.name,
            type:req.body.type,
            correct: req.body.correct, 
            wrong: req.body.wrong,
            left: req.body.left
        })

        console.log(result)

        success = true
        res.json({ success, result })

    }catch(error){
        res.json({ success, error })
    }
    
})

router.get('/fetch/:name', async (req, res) => {
    try {
        const componentName = req.params.name;

        // Find the component by name
        const component = await Result.findOne({ name: componentName });

        if (!component) {
            return res.status(404).json({ message: 'Component not found' });
        }

        // Respond with the found component
        res.json(component);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router