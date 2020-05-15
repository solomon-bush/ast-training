const mysql = require('mysql2');


const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})


module.exports.SelectAll = (table) =>{
    return new Promise((resolve, reject) =>{
        pool.query('Select * from ??', table, (err, results)=>{
            err ? reject(err) : resolve(results)
        })
    })
}

module.exports.FindBy = (table, prop, val) =>{
    return new Promise((resolve,reject) =>{
        pool.query("SELECT * FROM ?? WHERE (?? = ?)", [table, prop, val], (err, results) => {
            err ? reject(err) : resolve(results)
         })
    })
}

module.exports.Insert = (table, object) =>{
    return new Promise((resolve, reject)=>{
        pool.query( "INSERT INTO ?? (??) VALUES (?)", [table, Object.keys(object), Object.values(object)],(err, results) =>{
            err ? reject(err) : resolve(results)
        })
        
    })
}
module.exports.Update = (table, prop, val, object) =>{
    return new Promise((resolve, reject)=>{
        pool.query("UPDATE ?? SET ? WHERE (?? = ?)", [table, object, prop, val], (err, results) =>{
            err ? reject(err) : resolve(results)
        })
    })
}
module.exports.Delete = (table, prop, val,) =>{
    return new Promise((resolve, reject)=>{
        pool.query( "DELETE FROM ?? WHERE (?? = ?)", [table, prop, val], (err, results) =>{
            err ? reject(err) : resolve(results)
        })
    })
}