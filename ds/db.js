import mysql from 'mysql2'
import config from './config.js'


const connection = mysql.createConnection(config.db2)



export default connection  // mysql.createConnection 方法创建连接实例
