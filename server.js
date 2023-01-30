const express = require('express')
const path = require('path')
const app = express()

//databse connection
require('./config/database')()

// public access
// app.use(express.static(path.join(__dirname, 'Client')))
app.use(express.static(path.resolve(__dirname,'Client')))

//Adding url encoders
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Engine Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const home = require('./routes/home')
app.use('/' , home)


// apis linking service here ...
const _api = require('./routes/apiroutes')
app.use('/api/v1/' , _api)


const port = process.env.PORT || 8000;
const listener = app.listen(port, () => {
    console.log("http://127.0.0.1:" + port);
    // console.log("Your app is listening on port " + listener.address().port);
});