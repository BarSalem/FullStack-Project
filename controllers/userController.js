const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const asyncHandler=require('express-async-handler');
const User=require('../DB/UserSch');
const nodemailer=require('./nodeMailing')

// route post /user
const registerUser=asyncHandler(async(req,res)=>{
    const {name,email,password}=req.body;
    if(!name||!email||!password){
        res.status(400)
        throw new Error("Missing Field")
    }
    const userExist=await User.findOne({email})
    if(userExist){
        res.status(400)
        throw new Error("User Exist")
    }
    const salt=await bcrypt.genSalt(10);
    const hasedPassword=await bcrypt.hash(password,salt);
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let token = '';
    for (let i = 0; i < 25; i++) {
    token += characters[Math.floor(Math.random() * characters.length )];
    }
    const user=await User.create({
        name,email,password:hasedPassword,confirmationCode: token
    })
    user.save((err) => {
        if (err) {
          res.status(500).send({ message: err });
               return;
            }
            res.json({
                _id:user.id,
                name:user.name,
                email:user.email,
                status:user.status,
                token:generateToken(user._id)
            })
   
          nodemailer.sendConfirmationEmail(
             user.name,
             user.email,
             user.confirmationCode
      );
   });
})

//route get /user/me
const getMe=asyncHandler(async(req,res)=>{
    const {_id,name,email}=await User.findById(req.user.id)
    res.status(200).json({
        id:_id,
        name,email
    })
})

// route post /user/login
const loginUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(user && (await bcrypt.compare(password,user.password))){
        res.json({
            _id:user.id,
            name:user.name,
            email:user.email,
            status:user.status,
            token:generateToken(user._id)
        })
    }
    else{
        res.status(400)
        throw new Error("Invalid data");
    }
})
// user updatePassword /acc/put
const updatePass=asyncHandler(async(req,res)=>{
    const {email,passworda,Nname}=req.body;
    const user=await User.findOne({email});
    if(user){
        if(Nname){
            await User.findOneAndUpdate({email}, {name:Nname});
        }
        console.log(user);
        const salt=await bcrypt.genSalt(10);
        const hasedPassword=await bcrypt.hash(passworda,salt);
        const process = await User.findOneAndUpdate({email}, {password:hasedPassword});
        if(process){
            res.status(201).json({
                _id:user.id,
                name:user.name,
                email:user.email,
                status:user.status,
                token:generateToken(user._id)
            })
    }
    else{
        res.status(400)
        throw new Error("Invalid data");
    }
}
    else{
        res.status(400)
        throw new Error("Invalid data1");
    }
})

const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
}


module.exports={
    registerUser,
    getMe,
    loginUser,
    updatePass
}