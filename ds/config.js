import dotenv from 'dotenv'
dotenv.config();

const PASSWORD = "FIT5120DB";

const config = {
  port: 5000, 
  db: {
    host: 'mysql-diagui-lu452126871-de43.b.aivencloud.com', 
    port: 13249,        
    user: 'avnadmin',         
    database: 'express_mysql_db'
  },
  db2: {
    host: 'fit5120-db.cje0oqke8zkd.ap-southeast-2.rds.amazonaws.com',
    user: 'admin',
    password: PASSWORD,
    database: 'fit5120_main_pro' 
  },
  db3:{
    url:'mongodb+srv://fit5120mongodb:fit5120mongodb@cluster0.ajc78dd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  }
}
export default config;
