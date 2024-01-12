const express = require('express')
const app = express()
const dotenv = require('dotenv')
const tasksRoute = require('./routes/tasksRoutes')
const connectDb = require('./config/db')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/errorHandler')
dotenv.config()

// middleware 
app.use(express.json())

app.get('/hello', (req, res) => res.send('Hello World!'))

app.use('/api/v1/tasks', tasksRoute)
app.use(notFound)
app.use(errorHandlerMiddleware)

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
