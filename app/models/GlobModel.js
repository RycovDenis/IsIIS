const sql = require('../lib/db.js');

const Glob = function (glob) {

};
Glob.getTitle = function (req, result){
   const abbreviation = req.query.abbreviation;
   const sql_query = "SELECT `name_"+req.query.lang+"` FROM `titles` WHERE `abbreviation` = '"+abbreviation+"'";
    if(req.query.lang === 'ru'){
        sql.query(sql_query, function (err, res) {
            if(err) {
                result(err, null);
            }
            else{
                result(null, res[0].name_ru);
            }
        });
    } else if(req.query.lang === 'kz'){
        sql.query(sql_query, function (err, res) {
            if(err) {
                result(err, null);
            }
            else{
                result(null, res[0].name_kz);
            }
        });
    } else if(req.query.lang === 'en'){
        sql.query(sql_query, function (err, res) {
            if(err) {
                result(err, null);
            }
            else{
                result(null, res[0].name_en);
            }
        });
    }
    
};

Glob.getSystemVersion = function (req, result){
    sql.query("SELECT `version` FROM `system` WHERE 1", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Glob.getAppSystemVersion = function (req, result){
    sql.query("SELECT  `appver` FROM `system` WHERE 1", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};


module.exports= Glob;