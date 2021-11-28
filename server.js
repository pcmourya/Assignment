const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env'})
connectDB()
const app = express()


//Body parser 
app.use(express.json())
app.use(cors())

// Routes
app.use('/api/restaurent', require('./routes/restaurent'))


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running`))