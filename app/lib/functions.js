const { ceil, round, abs} = require('mathjs'),
    appRoot = require('app-root-path'),
    nconf = require('nconf'),
    mysql = require("mysql"),
    path = require('path'),
    moment = require('moment');
    
module.exports = {
    acr: function(val='auto'){
         date_now = moment(+new Date()).format("YYYY")
        if (val=='auto'){
           val = moment(+new Date()).format("YYYY");
        }
        if (parseInt(val)==date_now){
         date = parseInt(val);
        }
        if (parseInt(val)<date_now){
           date = parseInt(val) + ' - ' + date_now;
        }
        if (parseInt(val>date_now)){
           date = date_now;
        }
        return date;
      },
      time: function(){
        return round(+new Date()/1000);
      },
      isset: function (val) {
        return (typeof val)!='undefined';
      },
      json_encode: function (val) {
        try {
          return JSON.stringify(val);
          } catch (e) {
          console.log(clc.red(e )+clc.green(' ~~jsonParser~~'));
      }
      },
      json_decode:function (val) {
        try {
            return JSON.parse(val);
          } catch (e) {
          console.log(clc.red(e )+clc.green(' ~~json_decode~~'));
      }
      },
      json_parse:function(val,key) {
        var result = this.json_decode(val);
        return result[key];
      },
      mysql_real_escape_string: function  (str) {
        if (typeof str != 'string')
            return str;

        return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
            switch (char) {
                case "\0":
                    return "\\0";
                case "\x08":
                    return "\\b";
                case "\x09":
                    return "\\t";
                case "\x1a":
                    return "\\z";
                case "\n":
                    return "\\n";
                case "\r":
                    return "\\r";
                case "\"":
                case "'":
                case "\\":
                case "%":
                    return "\\"+char; // prepends a backslash to backslash, percent,
                                      // and double/single quotes
            }
        });
        },
      configs:(fls)=>{
        const patch = '/app/configs';
        return nconf.argv().env().file({file: path.join(appRoot + patch,fls)})
      }
  }
