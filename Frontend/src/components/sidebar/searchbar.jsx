import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { useState } from 'react';
import toast from "react-hot-toast"
import useGetConversation from "../../hooks/useGetConversation"
import useConversation from '../../Zustand/Conversation';
const Searchbar = () => {
  const [Search, setSearch] = useState("");
  const {conversations}=useGetConversation();
  const {setselectedConversation} =useConversation();

 const HandleSubmit=(e)=>{
    e.preventDefault();
     if(!Search)
      return;
    
     const conversation=conversations.find((c)=> c.fullname.toLowerCase().includes(Search.toLowerCase()));     
 
     if(conversation){
      setselectedConversation(conversation);
      setSearch("");
     }
     else{
      toast.error("No such user found!");
     }
  }
  return (
    <div>
         <form onSubmit={HandleSubmit} className='flex px-2  gap-2 items-center'>
            <input type="text" value={Search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search...' className='input w-full input-bordered rounded-xl' />
           <button type='submit' className='btn btn-circle hover:cursor-pointer hover:bg-blue-500 bg-sky-500 text-white'>
           <IoSearchSharp className='w-6 h-6 outline-none ' /></button> 
         </form>
    </div>
  )
}

export default Searchbar
