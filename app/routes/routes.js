module.exports =function (app){
    const index = require('../controllers/IndexController');
    const users = require('../controllers/UserController');

    app.route('/')
        .get(index.getIndexPage);
    app.route('/login')
        .get(users.getLoginPage);
        app.route('/login')
        .post(users.userVerefication);
// app.get('/',(req,res)=>{

//     res.render('index',{
//         title: 'IS-ISS',
//         test: 'hello wrld'
//     });
// })
// app.get('/login',(req,res)=>{
//     res.render('login',{
//         title: 'IS-ISS',
//         ACR: system.acr('2000')
//     });
// })
}