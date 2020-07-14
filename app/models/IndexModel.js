const sql = require('../lib/db.js');

const Application = function (aplication) {
    this.app_vername = aplication.vername;
    this.app_vercode = aplication.vercode;
    this.app_name = aplication.appname;
    this.app_patch = aplication.appatch;
    this.app_file = aplication.appfile;
    this.app_date = new Date();

};

Application.getTitle = function (req, result){
    sql.query("", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};


module.exports= Application;
