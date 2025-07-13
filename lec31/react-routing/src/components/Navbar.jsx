import React from 'react'
import {NavLink, useNavigate} from 'react-router'

function Navbar() {

    let navigate = useNavigate();

    function goToOffice() {
        navigate('/office');
    }

    function goToHome() {
        navigate('/home');
    }   


  return (
    <div>
        <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/office">Office</NavLink>
        </nav>
        
    </div>
  )
}

export default Navbar