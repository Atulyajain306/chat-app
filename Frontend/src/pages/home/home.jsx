import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import Messages from '../../components/Messages/Messages.jsx'
const Home = () => {
  return (
    <div className='flex sm:min-w-[80vw] md:min-h-[650px] rouded-lg  bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 rounded-xl '>
       <Sidebar/>
       <Messages/>
    </div>
  )
}

export default Home
