const mongoose=require('mongoose');

const commentSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    comment:{
        type:String,
        required:[true,'Please add a comment:']
    }
},
{
    timestamps:true
})

module.exports= mongoose.model('Comment',commentSchema);