const express=require('express');
const app=express();
const cors=require('cors');
const port=3000;
const cookieParser=require('cookie-parser');

app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin: "http://localhost:4000",
    credentials: true
}))
app.use(cookieParser());
// app.use(function(req, res, next){
//     res.set("Access-Control-Allow-Origin", req.headers.origin);
//     res.set("Access-Control-Allow-Credentials", true);
// 	next();
// })
app.use(express.json());

app.use('/user', require('./routes/user-route'));
app.use('/view', require('./routes/view-route'));
app.listen(port, () => {
    console.log(`server listening at ${port}`);
});