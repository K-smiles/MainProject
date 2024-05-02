import dotenv from 'dotenv'
dotenv.config();

const PASSWORD = process.env.PASSWORD;

const config = {
  port: 5000, // express 服务启动端口
  /* 数据库相关配置 */
  db: {
    host: 'mysql-diagui-lu452126871-de43.b.aivencloud.com', // 主机名
    port: 13249,        // MySQL 默认端口为 3306
    user: 'avnadmin',          // 使用 root 用户登入 MySQL
    database: 'express_mysql_db' // 使用数据库
  },
  db2: {
    host: 'fit5120-db.cje0oqke8zkd.ap-southeast-2.rds.amazonaws.com',
    user: 'admin',
    password: PASSWORD,
    database: 'fit5120_main_pro' // Specify your database (schema) name here }
  }
}
console.log(PASSWORD)
export default config;
