const sql = require('../lib/db');
module.exports={
    getUser:()=>{
        sql.query("SELECT * FROM users",
        function(err, results, fields) {
          console.log(err);
          console.log(results); // собственно данные
          console.log(fields); // мета-данные полей 
      });
    }
}