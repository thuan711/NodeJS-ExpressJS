const newsRouter = require('./news');
const siteRouter = require('./site');
function route(app){
    app.use('/news', newsRouter)
    app.get('/', siteRouter)
    app.get('/lienhe', siteRouter)
}

module.exports = route;