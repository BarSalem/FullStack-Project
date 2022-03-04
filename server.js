const express= require('express');
const app=express();
const connectDB=require('./DB/db');
const dotenv=require('dotenv').config()
const path=require('path')

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:false}));


//serve frontend
app.use(express.static(path.join(__dirname,'./build')))
app.get('/*',(req,res)=> res.sendFile(path.resolve(__dirname,'./','build','index.html')))

app.listen(process.env.PORT || 3000);

app.use('/vid', require('./Routes/mainRoute'));
app.use('/user',require('./Routes/userRoutes'));