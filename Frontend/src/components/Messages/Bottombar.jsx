import React, { useState } from 'react'
import {BsSend} from "react-icons/bs"
import useSentMessage from '../../hooks/useSentMessage';
const Bottombar = () => {
     const [message,setmessage]=useState("");
     const {loading,sendMessage}=useSentMessage();
     const HandleSubmit=async(e)=>{
          e.preventDefault();
          if(!message)return;
          await sendMessage(message);
          setmessage("");        
     };
  return (
     <form className='px-4 my-9  w-[60vw] absolute bottom-0' onSubmit={HandleSubmit}>
          <div className='w-auto sticky '>
            <input type="text" placeholder='Enter messages here...' className='text-lg w-full p-2 rounded-md bg-neutral-300 border-gray-500' value={message} onChange={(e)=>{setmessage(e.target.value)}} />
            <button type='submit' className='absolute right-4 inset-y-0 end-0 flex items-center pe-3'>
              { loading ? <span className='loading loading-spinner'></span> :<BsSend />}
            </button>
          </div>
     </form>
  )
}

export default Bottombar
