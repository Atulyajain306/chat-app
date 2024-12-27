import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from "../context/Auth"

const HandleSignup = () => {
     const [loading,setloading]=useState(false);
     const {setAuthUser}=useAuthContext();
      const handle= async ({fullname,username,password,confirmpassword,gender})=>{
        const success=handleInputErrors({fullname,username,password,confirmpassword,gender});
        if(!success)return;
        setloading(true);
        try{
            const res=await fetch("/api/auth/signup",{
               method:"POST",
               headers:{"Content-Type":"application/json"},
               body:JSON.stringify({fullname,username,password,confirmpassword,gender})
            });
           const data= await res.json(); 
            if(data.error){
              throw new Error(data.error)
            }
           localStorage.setItem("chat-user",JSON.stringify(data));
              setAuthUser(data);
        }catch(error){
           toast.error(error.message);
        }finally{
          setloading(false);
        }
       
      }
        
     return{loading,handle};
}

export default HandleSignup

function handleInputErrors({fullname,username,password,confirmpassword,gender}){
  if(!fullname || !username || !password || !confirmpassword || !gender){
           toast.error("Please fill all the Fields");
          return false; 
  } 
 
  if(password!==confirmpassword){
    toast.error("Passwords do not match");
    return false;
  }

  if(password.length <6){
    toast.error("Password must be at least 6 characters long");
     return false;
  } 
   return true; 
}