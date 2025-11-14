
const express = require('express')
const cors = require('cors')

//user defined modules
const myAuth = require('./utils/auth')
const userRouter = require('./routes/user')
const courseRouter = require('./routes/course')

const app = express()

//middleware
app.use(cors())
app.use('/image', express.static('images'))
app.use(express.json())
app.use(myAuth)
app.use('/user', userRouter)
app.use('/course', courseRouter)

app.listen(4000, 'localhost', () => {
    console.log('server started at port 4000')
})