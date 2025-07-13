import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Office from './components/Office'  
import {Routes,Route} from 'react-router'
import Marketing from './components/Marketing'
import Operations from './components/Operations'
import AuthLayout from './components/AuthLayout'
import Login from './components/Login'
import Register from './components/Register'
import City from './components/City'

function App() {
  

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/office" element={<Office/>}>
          <Route index element={<div>Welcome to the Office Home Page</div>} />
          <Route path='marketing' element={<Marketing/>} />
          <Route path='operations' element={<Operations/>} />
          <Route path=':city' element={<City/>} />
        </Route>
        <Route element={<AuthLayout/>}> 
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
