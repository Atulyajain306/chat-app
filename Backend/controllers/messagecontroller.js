import Conversation from "../model/conversation.js";
import Message from "../model/message.js"
import { getReceiverSocketId } from "../socket/socket.js";
import { io } from "../socket/socket.js"
export const sentMessage= async(req,res)=>{
      try{
            const {message}=req.body; 
            const {id : receiverId} =req.params;
            const senderId=req.user._id;
             
          let converse= await Conversation.findOne({
                  participants:{$all :[senderId,receiverId]},
            })
          if(!converse){
               converse= await Conversation.create({
                  participants:[senderId,receiverId],
            })
          }
         const newMessage= new Message({
            senderId,
            receiverId,
            message
         });
         
       if(newMessage){
            converse.messages.push(newMessage._id);
            
       }
         
         await Promise.all([converse.save(),newMessage.save()]);

         const receiverSocketId=getReceiverSocketId(receiverId);

         if(receiverSocketId){
          io.to(receiverSocketId).emit("newMessage",newMessage);
         }
        
         
         res.status(201).json(newMessage);
      }
      catch(error){
        console.log(error);
        res.status(500).json({error:"Internal Server Error"});
      }
} 

export const getMessages= async(req,res)=>{
       try{
            const {id:usertoChatId}=req.params;
            const  senderId=req.user._id; 

            const converse= await Conversation.findOne({
                  participants:{$all :[senderId,usertoChatId]},
            }).populate("messages");
             if(!converse)return res.status(200).json([]);

            res.status(200).json(converse.messages); 
       }
       catch(error){
           console.log(error);
           res.status(500).json({error:"Server error occured"})  
       }
}