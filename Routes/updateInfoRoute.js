const express=require('express');
const router=express.Router();
const {updatePass}=require('../controllers/userController');

router.post('/',updatePass);

module.exports=router;