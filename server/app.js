const express = require('express')
const app = express()
const punycode = require('punycode/');
const mongoose = require('mongoose')
const PORT = 5000
const {MONGOURI} = require('./keys');
require('./models/user')
const router = require('./routes/auth');




app.use(express.json())
app.use(router)


mongoose.connect(MONGOURI)
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo");
})
mongoose.connection.on('error',(err)=>{
    console.log(err);
})

app.listen(PORT,()=>{
    console.log("server is running");
})