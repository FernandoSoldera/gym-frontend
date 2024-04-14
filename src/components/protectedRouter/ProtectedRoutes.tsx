import React from 'react'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
  try {
    const token = Cookies.get('token')
    const decodedToken = jwtDecode(token === undefined ? '' : token)
    return <Outlet />
  } catch (error) {
    return <Navigate to={'login'}></Navigate>
  }
}

export default ProtectedRoutes
