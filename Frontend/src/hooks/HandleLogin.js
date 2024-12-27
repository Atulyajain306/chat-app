import React from 'react'
import { useState } from 'react'
import toast from "react-hot-toast"
import { useAuthContext } from '../context/Auth'
const HandleLogin = () => {
   const [loading,setloading]=useState(false)
   const {setAuthUser}=useAuthContext()
   const login=async(username,password)=>{
        const success=InputError(username,password)
        if(!success)return;
          setloading(true)
         try{
            const res = await fetch("/api/auth/login",{
               method:"POST",
               headers:{"Content-Type":"application/json"},
               body:JSON.stringify({username,password})  ,
            }); 
             const data= await res.json()
             if(data.error){
               throw new Error(data.error); 
             }
              console.log(data)
             localStorage.setItem("chat-user",JSON.stringify(data));
             setAuthUser(data);
         }catch(error){
            toast.error(error.message); 
         }finally{
            setloading(false)
         }  
   }

   return {loading,login}
}

export default HandleLogin

function InputError(username,password){
      if(!username || !password){
        toast.error("Please enter both username and password");
        return false;
      }
      return true;
}