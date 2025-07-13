import React from 'react'
import { Outlet } from 'react-router'

function AuthLayout() {
  return (
    <div>
        Please Login or Register to enter
        <Outlet/>
    </div>
  )
}

export default AuthLayout