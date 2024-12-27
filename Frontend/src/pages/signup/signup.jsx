
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import HandleSignup from '../../hooks/HandleSignup'
const Signup = () => {
  const [gender,setgender]=useState("");
  const {loading,handle}=HandleSignup();
      const [inputs,setinputs]=useState({
         fullname:"",
         username:"",
         password:"",
         confirmpassword:"",
         gender:""
      });
     
      const HandleSubmit= async(e)=>{
         e.preventDefault();
         await handle(inputs); 
      };  
     const genderChange=(gender)=>{
           setgender(gender); 
           setinputs({...inputs,gender:gender});
     }
     
  return (
    <div className='flex flex-col items-center justify-center mx-auto min-w-96'>
    <div className='w-full p-6 rounded-lg shadow-xl bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <div className='text-3xl text-center items-center font-semibold '>Signup 
             <span className='text-3xl text-center items-center font-semibold text-blue-500'> ChatApp</span>
        </div>
         <form  onSubmit={HandleSubmit}>
              <div className=''>
              Fullname
              </div>
               <input type="text" placeholder='Enter Fullname' className='w-full p-2 rounded-lg bg-gray-300 input input-bordered h-10 ' value={inputs.fullname} onChange={(e)=> setinputs({...inputs,fullname:e.target.value})} />
              <div className=''>
                Username 
              </div>
              <input type="text" placeholder='Enter Username' className='w-full p-2 rounded-lg bg-gray-300 input input-bordered h-10 '
               value={inputs.username}
                onChange={(e)=>setinputs({...inputs,username:e.target.value})}  />
              <div className=''>
                Password
              </div>
              <input type="password" placeholder='Enter Password' className='w-full p-2 rounded-lg bg-gray-300 input input-bordered h-10 ' value={inputs.password}
                onChange={(e)=>setinputs({...inputs,password:e.target.value})} />
              <div className=''>
                ConfirmPassword
              </div>
              <input type="password" placeholder='Confirm Password' className='w-full p-2 rounded-lg bg-gray-300 input input-bordered h-10 ' 
              value={inputs.confirmpassword}
              onChange={(e)=>setinputs({...inputs,confirmpassword:e.target.value})} />
                <div className='flex flex-col'>
                Gender 
                 <div className='flex gap-x-2'>
                   <div className='form-control'>
                <div className='flex justify-center gap-x-2'> <input type="checkbox" className='checkbox border-slate-500' checked={gender==="male"} onChange={()=>{genderChange("male")}} name="gender" id="male" />Male</div></div>
                 <div className='form-control'>
                <div className='flex justify-center gap-x-2'><input type="checkbox" className='checkbox border-slate-500' checked={gender==="female"} onChange={()=>{genderChange("female")}} name="gender" id="female" />Female</div></div></div>
               
                <Link to="/login" className=' hover:text-blue-600 top-0 hover:underline '>Already an account?</Link>
              <button disabled={loading} className='text-xl text-center items-center justify-center hover:text-white text-gray-700 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer rounded-lg h-10 my-4'>{
                loading ?(<span className='loading loading-spinner'></span>) : "SIGN UP"}
              </button> </div>
         </form>

    </div>
</div>
  )
}

export default Signup
