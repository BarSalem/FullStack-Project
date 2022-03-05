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
app.get('*',(req,res)=> res.sendFile(path.resolve(__dirname,'./','build','index.html')))
app.use('/vid', require('./Routes/mainRoute'));
app.use('/user',require('./Routes/userRoutes'));
app.use('/acc',require('./Routes/updateInfoRoute'));


app.listen(process.env.PORT || 3000 , ()=>{
    console.log("Server is running");
})
