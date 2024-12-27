import React from 'react'
import useConversation from '../../Zustand/Conversation'
import { useSocketContext } from '../../context/SocketContext';
const Conversation = ({conversation,idx}) => {
  const {selectedConversation,setselectedConversation}= useConversation();
      const isselected=selectedConversation?._id===conversation._id
      const {online}=useSocketContext()
      const isOnline=online.includes(conversation._id);
  return (
    <div>
    <div className={`flex gap-2 my-1 p-2 ${isselected ? "bg-sky-500": ""}  items-center hover:bg-blue-500 py-1 cursor-pointer`}
      onClick={()=>{setselectedConversation(conversation)}} >
       <div className={`avatar ${isOnline ? "online":"offline"}`}>
          <div className='w-12 rounded-full'>
             <img src={conversation.profilepic} alt="user avatar" />
          </div>
        </div>
       <div className='font-semibold'>
            <div>{conversation.fullname}</div>
        </div>  
    </div>

   {!idx && <div className='divider my-0 py-0 divide-neutral-800 h-2 w-full'></div>}
     </div>
  )
}

export default Conversation
