const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combine')) 
app.get('/', (req, res) => {
  res.send('Hello Worldđ!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})