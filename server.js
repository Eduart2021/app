const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const db = require('./config/keys').DATABASE_URL

mongoose.connect(db)
.then(()=>{console.log("Server conected")})
.catch(err => {console.log(err)})



const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log(`Running server on port ${PORT}`);
});