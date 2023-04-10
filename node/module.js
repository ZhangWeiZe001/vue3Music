const express = require('express'); //1 导入 express模块
const router = express.Router() //2 创建路由对象
const cors = require('cors'); //解决跨域
const mysql = require('mysql')//mysql数据库
const session = require('express-session')

//读取资源
const fs = require('fs');
const path = require('path');


// const { request } = require('express'); 上面如果有这个 见到就删 否则会报错
/* 

中间件
*/
//解析 json
router.use(express.json());
router.use(express.urlencoded({extended:false}));
//解决跨域 
router.use(cors());

//启用 session 中间件
router.use(session({
  secret:"keyboard cat", // secret 的属性值可以是任意字符串
  resave:false ,         //固定写法
  saveUninitialized:true //固定写法
}))

//mysql数据库
const data = mysql.createPool({
  host:'127.0.0.1',   //数据库的ip地址
  user:'root',        //登录数据库的账号
  password:'admin123',//登录数据库的密码
  database: 'music' //指定要操作哪个数据库
})

//检查是否能正常工作
data.query('SELECT 1',function(err,data){
  if(err)
  {return console.log(err.message);}
  console.log('已正常连接至数据库');
})

router.get('/',(req,res)=>{
  //测试
  data.query('SELECT * FROM book.user;',(err,data)=>{
    if(err)
    {return res.send(err.message)}
    res.send(data)
  })
  
})

//向外共享路由
module.exports = router;
