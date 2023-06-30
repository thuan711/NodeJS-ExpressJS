class SiteController{
    //[GET]/news
    index(req,res){
        res.render('home')
    }
    lienhe(req,res){
        res.render('lienhe')
    }
}
module.exports = new SiteController;