const express=require('express');
const router=express.Router();
const {updatePassword}=require('../controllers/userController');

router.post('/',updatePassword);

module.exports=router;