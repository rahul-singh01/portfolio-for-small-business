
const mongoose = require('mongoose')

function db() {
    try {
        mongoose.connect("mongodb+srv://webjaadugar:VjbIpZKmcD8PxhFP@cluster0.ircejzp.mongodb.net/?retryWrites=true&w=majority", {
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
