const express=require('express')
const router=express.Router();
const user=require('../resolvers/user-resolver');
const auth=require('../common/token');
router.post('/register', user.register);
router.post('/login', user.login);
router.post('/logout', user.logout)
router.get('/get', auth.verify, user.getUser);
module.exports=router;