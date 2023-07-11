import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from "./routes/user-routes";
import menuRouter from './routes/menu-routes';
// var bodyParser = require('body-parser')

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use('/api/user',router)
app.use('/api/menu', menuRouter)



mongoose.connect(
    'mongodb+srv://Srinivas_Dadi:tsGpTISzvsZmaw2D@cluster0.oznok61.mongodb.net/'
).then(
    () => app.listen('5000')
).then(
    () => {
        console.log('Connected successfully')
    }
).catch( (err) =>    console.log(err));


// tsGpTISzvsZmaw2D  mongo cluster pwd 
// app name in mongo db-  12AM-PM
// Srinivas_Dadi  username for cluster

//https://source.unsplash.com/random/700x500/?pizza 
// the above link is to import images dynamically