const jwt=require('jsonwebtoken');
const JWT_SECRET=process.env.JWT_SECRET;
const fetch=(req,res,next)=>{
    const token=req.header('auth-token');
    if(!token){
        return res.status(401).json({error:"not a valid token"});
    }
    const data=jwt.verify(token,JWT_SECRET);
    req.user=data.user;
    next();

}
module.exports=fetch;

















module.exports=fetch