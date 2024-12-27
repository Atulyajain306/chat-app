import React from 'react'
import useConversation from '../../Zustand/Conversation'
import { useAuthContext } from '../../context/Auth'
import { extractTime } from '../utils/extractTime';

const Mess = ({message}) => {
    const {authUser}=useAuthContext();
    const {selectedConversation}= useConversation();
    const fromMe=message.senderId===authUser._id;
    const formattedTime=extractTime(message.createdAt);
    const chatClass=fromMe ? "chat-end" : "chat-start";
    const profilePic=fromMe ? authUser.profilepic : selectedConversation?.profilepic;
    const color= fromMe ? "bg-blue-500" : "bg-gray-700";
  return (
    <div className={`chat ${chatClass} relative`}>
       <div className='chat-image avatar'>
       <div className='w-10 rounded-full'>
          <img src={profilePic} alt="Tailwind css chat app" />
       </div>

       </div>
       <div className={`chat-bubble text-white ${color}`}>{message?.message}</div>
       <div className='chat-footer opacity-90 text-xs text-gray-900 flex gap-1 items-center'>{formattedTime}</div>
    </div>
  )
}

export default Mess
