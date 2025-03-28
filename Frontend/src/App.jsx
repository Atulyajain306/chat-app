import { useState } from 'react'
import './App.css'
import Login from "./pages/login/login.jsx"
import Logout from "./pages/logout/logout.jsx"
import Signup from "./pages/signup/signup.jsx"
import Home from './pages/home/home.jsx'
import { Routes,Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/Auth.jsx'

function App() {
 
  const {authUser}=useAuthContext();
  return (
    <>
      <div className=" p-4 h-screen flex items-center justify-center">
        <Routes>
          <Route path='/' element={ authUser ? <Home/>: <Navigate to='/login' /> } />
          <Route path="/login" element={ authUser ? <Navigate to="/" /> : <Login />} />
          <Route path='/signup' element={ authUser ? <Navigate to="/" /> : <Signup/>}/>
          
        </Routes>
        <Toaster/> 
      </div>
      
    </>
  )
}

export default App
