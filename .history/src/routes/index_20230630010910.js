function route(app){
    app.get('/', (req, res) => {
        res.render('home')
      })
    app.get('/lienhe', (req, res) => {
    res.render('lienhe')
    })
}

module.exports = route;