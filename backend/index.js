const connectToMongo = require('./db')
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

connectToMongo();
app.use(cors())

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.use('/api/auth', require('./routes/auth'))
  app.use('/api/result', require('./routes/result'))
  app.use('/api/format', require('./routes/format'))

  app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  })