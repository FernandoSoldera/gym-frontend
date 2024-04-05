import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import Login from './pages/Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Evaluations from './pages/Evaluations'
import Class from './pages/Class'
import SocialMedia from './pages/SocialMedia'
import WorkoutLogs from './pages/WorkoutLogs'
import Students from './pages/Students'
import Profile from './pages/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/evaluations',
    element: <Evaluations />,
  },
  {
    path: '/class',
    element: <Class />,
  },
  {
    path: '/social-media',
    element: <SocialMedia />,
  },
  {
    path: '/workout-logs',
    element: <WorkoutLogs />,
  },
  {
    path: '/students',
    element: <Students />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
