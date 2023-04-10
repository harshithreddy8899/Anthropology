const jwt=require('jsonwebtoken')
require('dotenv').config()
const {JWT_SECRET}=process.env

const verify=(req, res, next)=>{
    try{
        const token=req.cookies.token;
        if(!token){
            return res.status(404).json({message:"err, no token"});
        }
        const verified=jwt.verify(token, JWT_SECRET);
        req.email=verified.email;
        next();
    }
    catch(err){
        console.log(err);
        return res.status(404).json({message:"err"})
    }
}

const generate=(email)=>{
    const ret=jwt.sign({email:email}, JWT_SECRET);
    return ret;
}

module.exports={verify, generate}