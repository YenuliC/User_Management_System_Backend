const express = require('express')
const app = express()
const cors  =require('cors')
const port = 3001
const host = 'localhost'
const mongoose = require('mongoose')
const router = require('./router')

app.use(cors());
app.use(express.json());

//connect mongodb
const uri = 'mongodb+srv://YenuliC:Yc61033340%23@cluster0.csqbk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

//Using async we can hold other fuction until an API is successful
const connect =async()=>{
    try{
        await mongoose.connect(uri);
        console.log('connected to MongoDB')
    }
    catch(error){
        console.log('MongoDB Error:', error)
    }
};

connect();

const server = app.listen(port, host, () =>{
    console.log(`node server is listen to ${server.address().port}`)
});

app.use('/api', router)