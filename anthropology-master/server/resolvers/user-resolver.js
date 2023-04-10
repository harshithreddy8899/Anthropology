const bcrypt=require('bcrypt');
const conn=require('../dbconnection');
const auth=require('../common/token');
const login = async(req, res) => {
    const{email, password} = req.body;
    //const rows=await conn.query("SELECT password FROM accounts WHERE id=1");
    console.log('user logging in');
    conn.query("SELECT username, email, password FROM accounts WHERE email=?", [email], async (err, rows) => {
        if(err){
            return res.status(404).json({messsage:"ERR"});
        }
        if(rows.length>0){
            const valid=await bcrypt.compare(password, rows[0].password);
            console.log("valid: ", valid);
            if(!valid){
                return res.status(404).json({message:"invalid password"});
            }
            const userToken=auth.generate(email);
            res.cookie('token', userToken, {
                httpOnly: true,
                secure: true,
                sameSite:"None"
            });
            console.log("cookie generated");
            return res.status(200).json({message:"OK", username:rows[0].username, email:rows[0].email});
        }
        else{
            return res.status(404).json({message:'invalid email'})
        }
    });
}

const register = async(req, res) => {
    console.log("registering user");
    const {user, password, email} = req.body;
    const hash=await bcrypt.hash(password, 10);
    const saved = await conn.query("INSERT INTO accounts(username, password, email) VALUES (?, ?, ?)", [user, hash, email]);
    if(saved){
        return res.status(200).json({message:'OK'})
    }
    return res.status(404).json({message:'ERR'});
}

const logout=async(req, res)=>{
    res.clearCookie("token");
    res.sendStatus(200);
}

const getUser=async(req, res)=>{
    const email=req.email;
    conn.query("SELECT username, email FROM accounts WHERE email=?", [email], (err, rows) => {
        if(err){
            return res.status(404).json({messsage:"ERR"});
        }
        if(rows.length>0){
            return res.status(200).json({message:"OK", username:rows[0].username, email:rows[0].email});
        }
        else{
            return res.status(404).json({message:'invalid email'})
        }
    });
}

module.exports={
    login,
    register,
    logout,
    getUser
}