const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()

app.use(bodyParser.json())
app.use(cookieParser())
app.set('view engine', 'pug')

app.get('/', async (req, res, next) => {
    res.render(`index`)
})

const asana = require('./routes/asana')
app.use('/asana', asana)

const author = require('./routes/author')
app.use('/author', author)

app.listen(3000, () => {
    console.log('Server listening.')
})
