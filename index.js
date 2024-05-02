
import config from './ds/config.js'
import connection from './ds/db.js'

import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const __filenameNew = fileURLToPath(import.meta.url)

const __dirnameNew = path.dirname(__filenameNew)

const app = express()

app.use(cors()) // Use this after the variable declaration

// Priority serve any static files.
app.use(express.static(path.resolve(__dirnameNew, 'client/build')));

// Answer API requests.
app.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Hello from the custom server!"}');
});

app.get('/posts', (req, res, next) => {
  /* 使用 connection.query 来执行 sql 语句 */
  // 第一个参数为 sql 语句，可以透过 js 自由组合
  // 第二个参数为回调函数，err 表示查询异常、第二个参数则为查询结果（这里的查询结果为多个用户行）
  connection.query('select * from diabetes_incidence_by_year', (err, users) => {
    console.log(err)
    if (err) {
      res.send('query error')
    } else {
      // 将 MySQL 查询结果作为路由返回值
      res.send(users)
    }
  })
})

app.get('/hospitals', (req, res, next) => {
  /* 使用 connection.query 来执行 sql 语句 */
  // 第一个参数为 sql 语句，可以透过 js 自由组合
  // 第二个参数为回调函数，err 表示查询异常、第二个参数则为查询结果（这里的查询结果为多个用户行）
  connection.query('select * from myhosp_data', (err, hospitals) => {
    console.log(err)
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
  console.log(latitude)
  console.log(longitude)
  let sql = 'SELECT *, Round((6371 * acos(cos(radians('
    + latitude +
    ')) * cos(radians(Latitude)) * cos(radians(Longitude) - radians(' + longitude + ')) + sin(radians('
    + latitude + ')) * sin(radians(Latitude)))),1) AS Distance FROM myhosp_data HAVING Distance < 50 ORDER BY Distance ASC LIMIT 10'
  console.log(sql)
  connection.query(sql, (err, users) => {
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


