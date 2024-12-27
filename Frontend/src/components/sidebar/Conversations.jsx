import React from 'react'
import { useEffect } from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation'
const Conversations = () => {
    const {Loading,conversations}=useGetConversation();
     
  return (
    <div className='py-2 flex flex-col overflow-auto max-h-[60vh]'>

        {conversations.map((conversation,idx)=>(
          <Conversation
             key={conversation._id}
             conversation={conversation}
             idx={idx=== conversations.length -1}
              />
        ))} 

       {Loading ? <span className='loading loading-spinner justify-center items-center'></span> : null}
        
    </div>
  )
}

export default Conversations
