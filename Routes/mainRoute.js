const express=require('express');
const router=express.Router();
const {getCom,postCom,updateCom}=require('../controllers/mainController');
const {protect} = require('../middleware/authMiddleware')

router.get('/', getCom);

router.post('/', postCom);

router.put('/:id', protect,updateCom);


module.exports=router;