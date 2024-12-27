import {createContext, useContext, useEffect } from "react";
import { useState } from "react";
import io from "socket.io-client"
import { useAuthContext } from "./Auth";

export const SocketContext=createContext();
 export const useSocketContext=()=>{
    return useContext(SocketContext);
 }

export const  SocketContextProvider=({children})=>{
      const [socket, setSocket] = useState(null);
      const [online, setonline] = useState([]);
      const {authUser}=useAuthContext();
      useEffect(()=>{
          if(authUser){
            const socket = io('http://localhost:3000',{
              query:{  
               userId:authUser._id
              },
            });
            setSocket(socket);
            socket.on("getOnlineUsers",(users)=>{
                setonline(users);
            })

            return ()=> socket.close();
          }
          else{
             if(socket){
                socket.close();
                setSocket(null); 
             }
          }
      },[authUser])
   return(
     <SocketContext.Provider value={{socket,online}}>
        {children}
     </SocketContext.Provider>
   )

}