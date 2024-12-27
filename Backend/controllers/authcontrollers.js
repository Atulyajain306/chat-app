import User from "../model/model.js";
import bcryptjs from "bcryptjs"
import generatetokensetcookie from "../utils/webtoken.js";
 export const login = async(req,res)=>{
     try{
        
      const {username,password}=req.body;
      const user= await User.findOne({username});
      const Match= await bcryptjs.compare(password,user?.password || "");

      if(!user || !Match){
        return res.status(400).json({error:"Username or Password doesn't Exist"})
      }


      generatetokensetcookie(user._id,res);

      res.status(201).json({
        fullname:user.fullname,
        username:user.username,
        profilepic:user.profilepic,
        _id:user._id
      });

     }catch(error){
      console.log(error);
      res.status(500).json({error:"Internal Server Error"});
      }   
    

 };

 export const signup =async(req,res)=>{
     try{
       const {fullname,username,password,confirmpassword,gender}=req.body;
        if (password!== confirmpassword){
            return res.status(400).json({error:"Password does not match"})
        }
       const user =await User.findOne({username});
                   
       if(user){
        return res.status(400).json({error:"Username already exist"})
       }

       const slt = await bcryptjs.genSalt(10);
       const hashpassword= await bcryptjs.hash(password,slt);


      const boyprofilepic=`https://avatar.iran.liara.run/public/boy?username=${username}`
      const girlprofilepic=`https://avatar.iran.liara.run/public/girl?username=${username}`
      
      const newUser= new User({
        fullname,
        username,
        password:hashpassword,
        gender,
        profilepic:gender==="male"?boyprofilepic:girlprofilepic
      })

      
      generatetokensetcookie(newUser._id,res);
      await newUser.save();
      
      res.status(201).json({
        _id:newUser._id,
        fullname:newUser.fullname,
        username:newUser.username,
        password:hashpassword,
        profilepic:newUser.profilepic
      })
     
      
     }
     catch(error){
        console.log(error)
        res.status(500).json({error:"Internal server error"});
    }
 };

 export const logout =async(req,res)=>{
     try{
          res.cookie("jwt","",{maxAge:0});
          res.status(200).json({message:"Logged out Succesfully"});
     }
     catch(error){
        console.log(error);
        res.status(500).json({error:"Internal server Error"});   
     }
   
 };