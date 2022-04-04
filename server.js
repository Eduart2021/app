const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const items = require('./routes/api/items')

const app = express()

app.use(bodyParser.json())

const db = require('./config/keys').DATABASE_URL

mongoose.connect(db)
.then(()=>{console.log("Server conected")})
.catch(err => {console.log(err)})

app.use('/api/items', items)

const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log(`Running server on port ${PORT}`);
});