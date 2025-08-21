import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'


function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
   
  )
}

export default App
