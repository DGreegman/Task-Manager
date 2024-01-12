const express = require('express')
const app = express()
const dotenv = require('dotenv')
const tasksRoute = require('./routes/tasksRoutes')
const connectDb = require('./config/db')
dotenv.config()

// middleware 
app.use(express.json())

app.get('/hello', (req, res) => res.send('Hello World!'))

app.use('/api/v1/tasks', tasksRoute)

port = process.env.PORT ||  3000;

const start = async() => {
    try {
        await connectDb(process.env.CONNECTION_STRING)

        app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    } catch (error) {
        console.log(error)
    }
}

start()
