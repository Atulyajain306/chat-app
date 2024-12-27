import { useSocketContext } from '../context/SocketContext'
import useConversation from "../Zustand/Conversation"
import notificationSound from "../assets/sounds/notification.mp3"
import { useEffect } from 'react'
const useListenMessage = () => {
  const {socket}=useSocketContext();
  const {messages,setmessages}=useConversation(); 
  useEffect(() => {
      socket?.on("newMessage",(newMessage)=>{
          const sound= new Audio(notificationSound);
          sound.play(); 
        setmessages([...messages,newMessage]);
      });
    return () => socket?.off("newMessage");
    
  }, [socket,setmessages,messages]);
  
  

}

export default useListenMessage
