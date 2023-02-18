
const mongoose = require('mongoose')
require('dotenv').config()

function db() {
    try {
        mongoose.connect(process.env.database_key, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        const connection = mongoose.connection

        connection.once('open', () => {
            console.log('Database Connected')
        })
    } catch (err) {
        console.log("database connection failed")
    }

}

module.exports = db
