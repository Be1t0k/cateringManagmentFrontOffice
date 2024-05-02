import React from 'react'
import { Outlet } from 'react-router-dom'

function LoginLayout() {
  return (
    <div>
      <p style={{color: 'white'}}>Login header</p>
      <Outlet/>
    </div>
  )
}

export default LoginLayout