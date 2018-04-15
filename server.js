var _express = require('Express');
const path = require('path');

var mvcApp = _express();

//static complete
mvcApp.use('/home',_express.static(path.join(__dirname, '/src/home')));

mvcApp.get('/',function(req,res){
 res.sendFile('src/index.html',{"root":__dirname});
});

mvcApp.get('/app.js',function(req,res){
    res.sendFile('src/app.js',{"root":__dirname});
});

mvcApp.listen(8080);
console.log('App is listening to port 8080...')