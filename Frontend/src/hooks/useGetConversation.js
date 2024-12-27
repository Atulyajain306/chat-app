import { useState,useEffect } from "react"
import toast from "react-hot-toast"
const useGetConversation = () => {
  const [Loading,setLoading]=useState(false);
  const [conversations,setconversations]=useState([]);
  useEffect(() => {
    const getConversation=async()=>{
        setLoading(true);
         try{
            const res=await fetch("/api/users/",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
            });
            const data=await res.json()
            if(data.error){
               throw new Error(data.error); 
            }
            setconversations(data);
         }catch(error){
             toast.error(error.message)  
         }finally{
            setLoading(false);
         }
    }
   getConversation(); 
  }, [])
    return {Loading,conversations}
}

export default useGetConversation
