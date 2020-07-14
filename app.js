const express = require('express'),
    exphbs = require('exphbs'),
    session = require('express-session'),
    helmet = require('helmet'),
    path = require('path'),
    bodyParser = require('body-parser'),
    logger = require('./app/lib/logger'),
    routes = require('./app/routes/routes'),
    {configs} = require('./app/lib/functions');
var Extensions = require('websocket-extensions'),
    deflate    = require('permessage-deflate');

const app = express();
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: "KTZH.railways",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
app.use(helmet());
var exts = new Extensions();
exts.add(deflate);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.engine('.hbs', exphbs({
//   defaultLayout: 'main',
//   extname: '.hbs',
//   layoutsDir: path.join(__dirname, 'app/views/layouts')
// }));
// app.engine('hbs', require('exphbs'));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'app/views'));

logger(app);
app.use('/favicon.ico', express.static(path.join(__dirname,'favicon.ico')));
app.use('/images', express.static(path.join(__dirname,'public/img')));
app.use('/css', express.static(path.join(__dirname,'public/css')));
app.use('/js', express.static(path.join(__dirname,'public/js')));
app.use('/vendor', express.static(path.join(__dirname,'public/vendor')));

routes(app);


app.listen(3000,()=>{
    console.log('Sever running in 3000 port from localhost');
});
