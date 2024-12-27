import React from 'react'
import { BiLogOut } from "react-icons/bi";
import HandleLogout from '../../hooks/HandleLogout';
const Logoutbar = () => {

  const {Loading,logout}=HandleLogout();
  return (  
    <div>
        <div className='mt-auto py-4  ' >
         {!Loading ? 
        (<BiLogOut className='w-7  h-7 fixed bottom-[1vw] hover:cursor-pointer hover:text-gray-600' onClick={logout} />) :(<span className='loading loading-spinner'></span>) }
        </div>
    </div>
  )
}

export default Logoutbar
