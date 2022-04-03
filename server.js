const express= require('express');
const app=express();
const connectDB=require('./DB/db');
const dotenv=require('dotenv').config()
const path=require('path');
const User=require('./DB/UserSch');


connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'./build')))
app.use('/vid', require('./Routes/mainRoute'));
app.use('/user',require('./Routes/userRoutes'));
app.use('/acc',require('./Routes/updateInfoRoute'));
app.get('/confirm/:confirmationCode',(req, res, next) => {
  User.findOne({
    confirmationCode: req.params.confirmationCode,
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      if(user.status=='Active'){
        res.redirect('/')
      }
      else{
        user.status = "Active";
      user.save((err) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        else{
          res.redirect('/confirmed')
        }
      });
      }
    })
    .catch((e) => console.log("error", e));
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, './build')))
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, './', 'build', 'index.html')
      )
    )
  } else {
    app.get('/', (req, res) => res.send('Please set to production'))
  }

app.listen(process.env.PORT || 3000 , ()=>{
    console.log("Server is running");
})
