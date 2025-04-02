import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectClooudinary from './config/cloudinary.js';

//app config

const app = express()
const port = process.env.PORT || 4000
connectDB()
connectClooudinary()

//middleware
app.use(express.json())
app.use(cors())

//API endpoints
app.get('/',(req,res)=>{
    res.send('API working')
})
 app.listen(port,()=>console.log('server started on PORT: '+ port))