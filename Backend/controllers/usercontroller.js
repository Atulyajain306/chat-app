import User from "../model/model.js";
export const getusersforsidebar=async(req,res)=>{
       try{
             const loggedinuserid=req.user._id;
             const filterRedUser=await User.find({_id:{$ne:loggedinuserid}}).select("-password");

             res.status(200).json(filterRedUser);
       }
       catch(error){
        console.log(error);
        res.status(500).json({error:"Server error Occured"});
       }
}