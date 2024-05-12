import mysql from 'mysql2'
import config from './config.js'


const pool = mysql.createPool(config.db2)

let queryData = function (sql, callback) {
    pool.getConnection(function (err, coon) {
        if (err) {
            callback(err, null, null)
        } else {
            coon.query(sql, function (qer, val, field) {
                coon.release();
                callback(qer, val, field)
            })
        }
    })
}

export default queryData  // mysql.createConnection 方法创建连接实例
