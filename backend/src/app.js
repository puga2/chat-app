const express = require('express');
const dotenv =require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors')

const authRoutes = require('./routes/auth.route');
const messageRoutes = require('./routes/message.route')
const { connectDB } = require('./lib/db');

// configuration
dotenv.config();
const app = express();
const PORT = process.env.PORT;

//middleware 


app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

// API
app.use('/api/auth',authRoutes)
app.use('/api/message',messageRoutes)


app.listen(PORT,()=>{
    console.log("server is running on port "+PORT);
    connectDB();
})