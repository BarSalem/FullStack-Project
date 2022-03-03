const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const asyncHandler=require('express-async-handler')
const Comment=require('../DB/comments');
const User=require('../DB/UserSch');

const getCom=asyncHandler(async (req,res)=>{
    const comment=await Comment.find()
    res.status(200).json(comment)
})

const postCom=asyncHandler(async (req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add comment')
    }
    const comment= await Comment.create({
        comment:req.body.text
    })

    res.status(200).json(comment)
})

const updateCom=asyncHandler(async (req,res)=>{
    const comment= await Comment.findById(req.params.id)
    if(!comment){
        res.status(400)
        throw new Error("no Comment found")
    }

    const user=await User.findById(req.user.id);
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    if(comment.user.toString() !==user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedComment=await Comment.findByIdAndUpdate(req.params.id,{comment:req.body.text},{new:true})

    res.status(200).json(updatedComment)
})

module.exports={
    getCom,
    postCom,
    updateCom
}