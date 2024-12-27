import React from 'react'
import Abovebar from './Abovebar'
import Message from './Message'
import Bottombar from './Bottombar'
import IsChat from "./IsChat"
import { useEffect } from 'react'
import useConversation from '../../Zustand/Conversation'
const Messages = () => {
     const {selectedConversation,setselectedConversation}= useConversation();
         useEffect(() => {
           return () => {
            setselectedConversation(null);
           }
         }, [setselectedConversation])
           

  return (
    <div className='max-w-[1020px]  flex flex-col'>
        {!selectedConversation ? (<IsChat/>) :
        <div><Abovebar/>
          <Message/>
          <Bottombar/></div>}
          
    </div>
  )
}

export default Messages


