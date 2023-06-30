const path = require('path');
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

const route = require('./router');
app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')));
// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars.engine({
   extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', './src/resources/views')
// console.log('PATH:',path.join(__dirname, 'resources\\views'));


//ROUTES
app.get('/', (req, res) => {
  res.render('home')
})

route(app);
app.get('/lienhe', (req, res) => {
  res.render('lienhe')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})