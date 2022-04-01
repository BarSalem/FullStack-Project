const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add name:']
    },
    email:{
        type:String,
        required:[true,'Please add Email:'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Please add Password:']
    },
    status: {
        type: String, 
        enum: ['Pending', 'Active'],
        default: 'Pending'
     },
    confirmationCode: { 
        type: String, 
        unique: true },
    
},
{
    timestamps:true
})

module.exports=mongoose.model('User',userSchema);