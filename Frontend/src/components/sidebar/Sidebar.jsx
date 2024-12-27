import React from 'react'
import Searchbar from './searchbar'
import Conversations from './Conversations'
import Logoutbar from './Logoutbar'
const Sidebar = () => {
  return (
    <div className=' border-r-2  p-2 px-1 mx-0 w-[20vw] rounded-tl-xl rounded-bl-xl  border-slate-500  flex flex-col '>
          <Searchbar/>
          <div className='divider divider-neutral my-2 px-0 h-2'></div>
          <Conversations/>
          <Logoutbar/>
    </div>
  )
}

export default Sidebar
