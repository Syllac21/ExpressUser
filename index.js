const express = require('express');
const app = express();
const {getUser,showLogin,traitLogin,showRegister,traitRegister}= require('./controllers/UserController');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({extended : true}));
app.use(cookieParser());

app.get('/user', (res,req)=>{
  getUser(res,req);   
}
);
app.get('/login',(res,req)=>{
    showLogin(res,req);
});

app.listen(3000,(res,req)=>{

    // console.log('coucou');
    // console.log(getUser);

});

app.post('/login',(res,req)=>{
  traitLogin(res,req);
})

app.get('/register',(res,req)=>{
  showRegister(res,req);
})

app.post('/register',(res,req)=>{
  traitRegister(res,req);
})