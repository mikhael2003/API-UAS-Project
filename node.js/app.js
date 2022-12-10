// definisikan module, middleware
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const projectRoutes = require('./routes/project')

app.use('menu', projectRoutes)

mongoose.connect(process.env.DB_CONNECRION, { useNewUrlParser: true, useUnifiedTopology: true})
let db = mongoose.connection

    //handle error
    db.on('error', console.error.bind(console, 'Error Establishing a Database Connection?'))
    //handle sucsess 
    db.once('open', () => {
        console.log(`Database is connected`)
    })

app.listen(process.env.PORT, () => {
    console,log(`Server running on ${prcess.env.PORT}`)
})

