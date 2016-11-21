var express = require('express');
var app = express();
var path = require('path');
var Swig = require('swig');
Swig.setDefaults({
	cache:false
})

app.get('/', function (req, res) {
//res.send('Hello World!');
res.render('index');
});
// 设置文件后缀的解释器
app.engine('html', Swig.renderFile);
//设置 页面的后缀
app.set('view engine', 'html');
//设置 页面的 跟目录
app.set("views",path.join(__dirname,"../views"));
//拼接目录地址
app.use("/static",express.static(path.join(__dirname,"../static")));

var server = app.listen(9000, function () {
  console.log('http://127.0.0.1:9000');
});
