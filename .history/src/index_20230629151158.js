const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.get('/', (req, res) => {
  res.send('Hello World!12')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})