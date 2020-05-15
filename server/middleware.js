
module.exports._SET = (app) =>{
    app.use('/', (req, res, next)=>{
        var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        console.log(req.method + '\t @ \t' + fullUrl)
        next()
    })
}