
import express from 'express'
import cors from 'cors'
import path from 'path'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url'
import axios from 'axios';

import config from './ds/config.js'
import queryData from './ds/db.js'
import recipeRouter from './routes/recipes.js';

const __filenameNew = fileURLToPath(import.meta.url)
const __dirnameNew = path.dirname(__filenameNew)
const app = express()

app.use(cors())

app.use(bodyParser.json({ limit: '50mb' }))

const CONNECTION_URL = 'mongodb+srv://test:test@cluster0.w7qj7ix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(CONNECTION_URL, {
  dbName: 'recipe', bufferCommands: false
})
  .then(() => console.log("success"))
  .catch((error) => console.log(`${error} did not connect`));


// Priority serve any static files.
app.use(express.static(path.resolve(__dirnameNew, 'client/build')));

app.use('/recipes', recipeRouter);

const getKeyWord = async (req, res) => {

  const id = req.body.id;
  const imageData = req.body.image;
  try {
    const response = await axios.post('http://3.25.107.27:5000/detect', {
      id: id,
      image: imageData
    });
    // Assuming the response contains an object with 'id' and 'image' as the label
    const detectedLabel = response.data.image;
    res.status(200).json(detectedLabel);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
app.post('/foods/detect', (req, res, next) => {
  getKeyWord(req, res)
})

app.post('/add', (req, res) => {
  //接收post请求参数
  res.send(req.body);
})

app.get('/posts', (req, res, next) => {
  queryData('select * from diabetes_incidence_by_year', (err, users) => {
    console.log(err)
    if (err) {
      res.send('query error')
    } else {
      // 将 MySQL 查询结果作为路由返回值
      res.send(users)
    }
  })
})

app.get('/foods', (req, res, next) => {
  let sql = 'select * from food_diabetes_measure'
  if (Object.keys(req.query).length != 0) {
    if (req.query["name"] != undefined && req.query["name"] != '') {
      sql = sql + ' where '
      sql = sql + "`food name` like " + "'%" + req.query["name"] + "%' "
    }
    sql = sql + ' limit ' + (req.query['page'] - 1) * req.query['pageNumber'] + ',' + (req.query['page']) * req.query['pageNumber']

  }
  else {
    sql = 'select `food name` as name from food_diabetes_measure'
  }
  console.log(sql)
  queryData(sql, (err, users) => {
    if (err) {
      res.send('query error')
    } else {
      res.send(users)
    }
  })
})

app.get('/hospitals', (req, res, next) => {
  /* 使用 connection.query 来执行 sql 语句 */
  // 第一个参数为 sql 语句，可以透过 js 自由组合
  // 第二个参数为回调函数，err 表示查询异常、第二个参数则为查询结果（这里的查询结果为多个用户行）
  queryData('select * from myhosp_data', (err, hospitals) => {

    if (err) {
      res.send('query error')
    } else {
      // 将 MySQL 查询结果作为路由返回值
      res.send(hospitals)
    }
  })
})

app.get('/closest/:latitude/:longitude', (req, res, next) => {
  /* 使用 connection.query 来执行 sql 语句 */
  // 第一个参数为 sql 语句，可以透过 js 自由组合
  // 第二个参数为回调函数，err 表示查询异常、第二个参数则为查询结果（这里的查询结果为多个用户行）
  const latitude = parseFloat(req.params.latitude);
  const longitude = parseFloat(req.params.longitude);
  let sql = 'SELECT *, Round((6371 * acos(cos(radians('
    + latitude +
    ')) * cos(radians(Latitude)) * cos(radians(Longitude) - radians(' + longitude + ')) + sin(radians('
    + latitude + ')) * sin(radians(Latitude)))),1) AS Distance FROM myhosp_data HAVING Distance < 50 ORDER BY Distance ASC LIMIT 10'
  console.log(sql)
  queryData(sql, (err, users) => {
    if (err) {
      res.send('query error')
    } else {
      console.log(users)
      // 将 MySQL 查询结果作为路由返回值
      res.send(users)
    }
  })
})

//All remaining requests return the React app, so it can handle routing.
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirnameNew, 'client/build', 'index.html'));
});

app.listen(process.env.PORT || config.port, () => {
  console.log(`express server listen at http://localhost:${config.port}`)
})


