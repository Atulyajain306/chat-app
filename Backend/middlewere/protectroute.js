import  jwt from "jsonwebtoken";
import User from "../model/model.js"
const protectroute= async(req,res,next)=>{
       try{
            const token=req.cookies.jwt;
            if(!token){
               return res.status(401).json({error:"No token assigned"});

            }
         const decoded=jwt.verify(token,process.env.JWT_KEY);
         
         if(!decoded){
            return res.status(401).json({error:"No token assigned"});
         }
         
         const user= await User.findById(decoded.userId).select("-password");

         if(!user){
            return res.status(401).json({error:"User not found"});
         }
         req.user=user;
         next();
         


       }
       catch(error){
          console.log(error);
          res.status(500),json({error:"Internal Server error in protectrouter"});
       }
}
export default protectroute;