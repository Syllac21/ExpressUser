const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite',(err)=>{
    if(err){
        console.error("erreur BDD: " , err.message);
    }else{
        db.run(`CREATE TABLE IF NOT EXISTS users(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            password TEXT NOR NULL
            )`);
        console.log('connected');
    }
})
module.exports = db;
