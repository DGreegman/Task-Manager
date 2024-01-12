const mongoose = require('mongoose')

const connectionString = ""

const connectDB = (url) =>{
    mongoose.connect(url)
}

module.exports = connectDB