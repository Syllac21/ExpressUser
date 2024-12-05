const userView = require("../views/userView");
const loginView =require("../views/loginView");
const registerView = require('../views/registerView');
const db = require('../db/db');

const User = require("../models/User");

function getUser(req,res){
    const user = new User(1,'tintin','tata');
    
     res.send(userView(user));
//    return userView(user);
}

function showLogin(req,res){
    res.send(loginView());
}

function showRegister(req,res){
    res.send(registerView());
}

function traitLogin(req,res){
    const {name,password} = req.body;
    const newUser = new User(name, password);
    const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
    db.get(query,[
        newUser.name,
        newUser.password
    ],function(err){
        if(err){
            console.error('echec connexion : ',err.message);
            res.send('mauvais mot de passe');
        }else{
            console.log('connecté', newUser);
            res.send('bienvenue')
        }
    })
}

function traitRegister(req,res){
    const{name,password} = req.body;
    const newUser = new User(name, password);
    const query =`INSERT INTO users(userName,password) VALUES (?,?)`;
    db.run(query,[
        newUser.name,
        newUser.password
    ], function(err){
        if(err){
            console.error('echec enregistrement: ',err.message);
            res.send('ERROR');

        }else{console.log('user success', newUser);
            res.send('register succes');
        }
    });
}


module.exports = {getUser,showLogin,traitLogin,showRegister,traitRegister};