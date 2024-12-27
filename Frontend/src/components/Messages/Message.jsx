import React, { useEffect,useRef } from 'react'
import Mess from './Mess'
import useGetMessages from '../../hooks/useGetMessages'
import useListenMessage from '../../hooks/useListenMessage';
const Message = () => {
    const {loading,messages}=useGetMessages();
       useListenMessage();
     const reference = useRef();
     useEffect(() => {
       setTimeout(() => {
         reference.current?.scrollIntoView({"behavior":"smooth"}); 
       }, 200);
     }, [messages])
      
  return (
    <div className='px-2 flex-1 relative w-[60vw] top-[9vh] h-[60vh]  overflow-auto '>
       {!loading && messages.length >0 && (messages.map((message)=>(
          <div key={message._id} ref={reference}> <Mess message={message}/> </div> )))} 
       {loading && <div className='items-center justify-center text-center flex'><span className='loading loading-spinner'></span></div>}
       {!loading && messages.length===0 && (<h1 className='text-center text-2xl font-black mx-60'>Send a Message to start a Conversation...</h1>)}
    </div>
  )
}

export default Message
