import React from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/Auth';

const HandleLogout = () => {
   const [Loading, setLoading] = useState(false)
    const {setAuthUser}=useAuthContext()
   const logout=async()=>{
        setLoading(true);
        try{
           const res =await fetch("/api/auth/logout",{
            method:"POST",
            headers:{"Content-Type":"application/json"}
        }); 
           const data=await res.json();
            
            if(data.error){
               throw new Error (data.error)
            }
            localStorage.removeItem("chat-user");
              setAuthUser(null);
        }catch(error){
         toast.error(error.message)   
         console.log(error)
        }finally{
           setLoading(false); 
        }
   }
      return {Loading,logout};
}

export default HandleLogout
