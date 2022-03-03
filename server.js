const express= require('express');
const app=express();
const connectDB=require('./DB/db');
const dotenv=require('dotenv').config()
const path=require('path')

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/vid', require('./Routes/mainRoute'));
app.use('/user',require('./Routes/userRoutes'));

//serve frontend
if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname,'./build')))
    app.get('*',(req,res)=> res.sendFile(path.resolve(__dirname,'./','build','index.html')))
}

app.listen(5000,function(){
    console.log("Server is on");
});