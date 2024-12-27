import React from 'react'
import useConversation from '../../Zustand/Conversation'

const Abovebar = () => {
    const {selectedConversation,setselectedConversation}= useConversation();
  return (
 <div className='flex gap-x-5 items-center rounded-b-sm fixed bg-neutral-300 w-[60vw] rounded-tr-md py-1 px-2 p-1 m-0 cursor-pointer'>
       <div className={`avatar`}>
          <div className='w-12 rounded-full'>
             <img src={selectedConversation.profilepic} alt="user avatar" />
          </div>
        </div>
       <div className='font-semibold'>
            <div>{selectedConversation.fullname}</div>
        </div>  
    </div>

  )
}

export default Abovebar
