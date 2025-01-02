import express from 'express'
import cros from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import { connect } from 'mongoose'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'

// App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// Middlewares
app.use(express.json())
app.use(cros())


//API Endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)

app.get('/', (req, res) => {
    res.send("API working")
})

app.listen( port, () => console.log('Server started on PORT: ', port))