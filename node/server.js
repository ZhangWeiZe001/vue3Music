//导入第三方模块
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const mysql = require('mysql')//mysql数据库

//导入路由模块
const userRouter = require('./module')

//获取服务器
const app = express();

//修改输入的 最大限制
var bodyParser = require('body-parser')
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));


//接收路由
app.use(userRouter);
app.use(session({
    secret:"keyboard cat", // secret 的属性值可以是任意字符串
    resave:false ,         //固定写法
    saveUninitialized:true //固定写法
}))

app.listen(5055,function(){
    console.log('http://127.0.0.1:5055');
})


