const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

require('./database-connection')

const app = express()

app.use(bodyParser.json())
app.use(cookieParser())
app.set('view engine', 'pug')

// const asana = require('./routes/asana')

// app.use('/asana', asana)

const meditation = require('./routes/meditation')

app.use('/meditation', meditation)

// const pranayama = require('./routes/pranayama')

// app.use('/pranayama', pranayama)

// const yogaset = require('./routes/yogaset')

// app.use('/yogaset', yogaset)


app.get('/', (req, res, next) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log('Server listening.')
})
