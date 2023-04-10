const express=require('express')
const router=express.Router();
const view=require('../resolvers/view-resolver');
const auth=require('../common/token');
router.get('/allmeansmeasurementbytrait', auth.verify, view.getAllMeansByTrait);
module.exports=router;