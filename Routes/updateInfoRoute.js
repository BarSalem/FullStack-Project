const express=require('express');
const router=express.Router();
const {updatePassword}=require('../controllers/userController');

// user updatePassword /acc/put
/*const updatePassword=asyncHandler(async(req,res)=>{
    const {password,password2}=req.body;
    const user=await User.findOne({email});
    if(user){
        const salt=await bcrypt.genSalt(10);
        const hasedPassword=await bcrypt.hash(password,salt);
        const process = await User.findOneAndUpdate({email:email}, {password:hasedPassword});
    }
    else{
        res.status(400)
        throw new Error("Invalid data");
    }
})*/


router.post('/',updatePassword);