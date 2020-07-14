'use strict';
module.exports = function(app){
    const path = require('path');
    const appRoot = require('app-root-path');

    const pad = num => (num > 9 ? "" : "0") + num;

    const generator = (time, index) => {
        if (!time) return "combined.log";
       
        var month = time.getFullYear() + "" + pad(time.getMonth() + 1);
        var day = pad(time.getDate());
        var hour = pad(time.getHours());
        var minute = pad(time.getMinutes());
       
        return `${month}/${month}${day}-${hour}${minute}-${index}-combined.log`;
      };

    const morgan = require('morgan');
    const rfs = require('rotating-file-stream') // version 2.x
    // const config = require('../configs/config');
    var combinedLogStream = rfs.createStream(generator, {
        interval: '1d', // rotate daily
        path: path.join(appRoot + '/logs/','log'),
        size: "25M",
     })
     
     app.use(morgan('tiny', {
        skip: function (req, res) { return res.statusCode < 400 }
     }));

     app.use(morgan('combined',{ stream: combinedLogStream }));
};