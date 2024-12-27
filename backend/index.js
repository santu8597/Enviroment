const connect=require('./db');
const cors=require('cors');

require('dotenv').config();
const express=require('express');
const app=express();
app.use(cors());
app.use(express.json())

const port=process.env.PORT;
app.use('/api/auth',require('./routes/auth'))
app.use('/api/review',require('./routes/review'))
app.use('/api/order',require('./routes/order'))
app.listen(port,()=>{console.log(`Server is running at port ${port}`)});
connect();