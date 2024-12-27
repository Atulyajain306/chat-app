import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import HandleLogin from '../../hooks/HandleLogin'
const Login = () => {
     const [username, setusername] = useState("")
     const [password, setpassword] = useState("")
      const {loading,login}=HandleLogin();
     const handleSubmit= async(e)=>{
         e.preventDefault();
         await login(username,password);
     }

  return (
    <div className='flex flex-col items-center justify-center mx-auto min-w-96'>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-4xl font-semibold text-center'>Login
            <span className='text-blue-500'> ChatApp</span>
        </h1>

      <form onSubmit={handleSubmit}>
         <div className='flex flex-col'>
          <div >
            <label className='label p-2'>
             <span className=' label-text text-lg '>Username</span>
            </label>
              <input type="text" value={username} onChange={(e)=>{setusername(e.target.value)}} placeholder='Enter Username' className=' w-full bg-gray-300 rounded-lg  input input-bordered h-10 placeholder:text-gray-500' />
          </div>

          <div >
            <label className='label p-2'>
             <span className=' label-text text-lg '>Password</span>
            </label>
              <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='Enter Password' className=' w-full bg-gray-300 rounded-lg  input input-bordered h-10 placeholder:text-gray-500 ' />
          </div>

          <Link to="/signup" className=' hover:text-blue-600 hover:underline '>Create an account?</Link>

           <button disabled={loading} className=' bg-blue-500 my-2 rounded-lg hover:cursor-pointer hover:bg-blue-700 hover:text-white text-center text-2xl text-gray-600 py-1'>{loading ?(<span className='loading loading-spinner'></span>) :("LOGIN") }</button></div>
        </form>  
    </div>     
    </div>
  )
}

export default Login
