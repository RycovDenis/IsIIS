const {json_encode, acr,time} = require('../lib/functions'),
moment = require('moment'),
{getUser} = require('../models/UserModel');
const { accessSync } = require('fs');
exports.getLoginPage = function (req,res) {
    getUser();
    res.render('login', {
        title: 'Login',
        HLW_MSG: 'Pleace Sign In!!!',
        HLW_EMAIL:'Email address',
        HLW_PASSW:'Password',
        HLW_REMMI:'Remember me',
        HLW_SIGN:'Sign in',
        ACR: acr('2020')
    });
    
};
exports.userVerefication = function (req,res) {
    if(req.body.email !== null && req.body.password !== null){
        req.session.users = req.body.email
    }
   
    console.log( req.session.users);

    res.redirect(301,'/');
};