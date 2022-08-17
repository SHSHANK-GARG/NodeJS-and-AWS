const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes/api')

const app = express();
app.use('/inventory',routes)

//connect to mongoDB

mongoose.connect('mongodb+srv://SHSHANKGARG:TEST@cluster0.lvn2w.mongodb.net/NodeJSAssignment', function () {
    console.log("MongoDB Connected successfully");
  })
mongoose.Promise = global.Promise;



app.listen(4000,()=>{
    console.log('Inventory Service running on 4000')
})