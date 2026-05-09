import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectClooudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import contactRouter from './routes/contactRoute.js';

//app config

const app = express()
const port = process.env.PORT || 4000
connectDB()
connectClooudinary()

//middleware
app.use(express.json())
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

//API endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/contact',contactRouter)


app.get('/',(req,res)=>{
    res.send('API working')
})
 app.listen(port,()=>console.log('server started on PORT: '+ port))