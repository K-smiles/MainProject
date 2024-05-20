
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

app.get('/posts', (req, res, next) => {
  queryData('select * from diabetes_incidence_by_year', (err, users) => {
    if (err) {
      res.send('query error')
    } else {
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
    if (req.query["gi"] != undefined && req.query["gi"] != '') {
      sql = sql + ' where '
      sql = sql + "GI_index_level = " + "'" + req.query["gi"] + "' "
    }
    sql = sql + ' limit ' + (req.query['page'] - 1) * req.query['pageNumber'] + ',' + (req.query['page']) * req.query['pageNumber']

  }
  else {
    sql = 'select `food name` as name from food_diabetes_measure'
  }

  queryData(sql, (err, users) => {
    if (err) {
      res.send('query error')
    } else {
      res.send(users)
    }
  })
})

app.get('/hospitals', (req, res, next) => {
  queryData('select * from myhosp_data', (err, hospitals) => {
    if (err) {
      res.send('query error')
    } else {
      res.send(hospitals)
    }
  })
})

app.get('/closest/:latitude/:longitude', (req, res, next) => {
  const latitude = parseFloat(req.params.latitude);
  const longitude = parseFloat(req.params.longitude);
  let sql = 'SELECT *, Round((6371 * acos(cos(radians('
    + latitude +
    ')) * cos(radians(Latitude)) * cos(radians(Longitude) - radians(' + longitude + ')) + sin(radians('
    + latitude + ')) * sin(radians(Latitude)))),1) AS Distance FROM myhosp_data HAVING Distance < 50 ORDER BY Distance ASC LIMIT 10'
  queryData(sql, (err, users) => {
    if (err) {
      res.send('query error')
    } else {
      res.send(users)
    }
  })
})

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirnameNew, 'client/build', 'index.html'));
});

app.listen(process.env.PORT || config.port, () => {
  console.log(`express server listen at http://localhost:${config.port}`)
})


