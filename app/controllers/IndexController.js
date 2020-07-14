const {isset} = require('../lib/functions');
const glob =require('../models/GlobModel') ;
exports.getIndexPage = function (req,res) {
    glob.getTitle(req, function(err, title) {
        if (err){
            res.render('index', {
                error: true,
                message: err,
                title: 'Error'
            });
        }else {
            res.render('index', {
                error: false,
                message: 'OK',
                title: title
            });            
        }
    }); 
};