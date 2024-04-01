import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Auth = () => {
  const isSignIn = true
  if (!isSignIn) {
    return <Navigate to="/auth/login" />
  }
  return (
    <>
      <div className=' w-full h-screen flex'>
        <div className=' w-1/2 h-full  flex justify-center items-center'>
          <Outlet />
        </div>
        <div className=' w-1/2 bg-black'>

        </div>
      </div>
    </>
  )
}

export default Auth