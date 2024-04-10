


import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Check if request is from HTTP and if so, redirect to HTTPS
app.enable("trust proxy");
app.use((req, res, next) => {
    req.secure ? next() : res.redirect("https://" + req.headers.host + req.url);
});

app.use(express.json());

// Your static site folder name
app.use(express.static(path.join(__dirname, "..", "build")));

// Root Redirects to the build in assets folder
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "build"));
});

// Any Page Redirects to the build in assets folder index.html that will load the react app
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "build/index.html"));
});

app.listen(port, () => {
    console.log("Server is running on port: ", port);
});


// configure local express
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

const
    CONNECTION_URL = 'mongodb+srv://test:test@cluster0.w7qj7ix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);