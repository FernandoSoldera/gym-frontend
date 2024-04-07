import { Avatar, Image, Tooltip } from '@chakra-ui/react'
import React from 'react'
import './Header.scss'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

export default function Header() {
  const navigate = useNavigate()
  const token = Cookies.get('token')
  const decodedToken: JwtPayload = jwtDecode(token === undefined ? '' : token)

  interface JwtPayload {
    username: string
  }

  return (
    <div className="header">
      <Image boxSize={'100px'} src="logo.jpg"></Image>
      <div className="linkPages">
        <h2 onClick={() => navigate('/evaluations')}>Evaluations</h2>
        <h2 onClick={() => navigate('/class')}>Class</h2>
        <h2 onClick={() => navigate('/social-media')}>Social Media</h2>
        <h2 onClick={() => navigate('/workout-logs')}>Workout Logs</h2>
        <h2 onClick={() => navigate('/students')}>Students</h2>
      </div>
      <div className="divAvatar" onClick={() => navigate('/profile')}>
        <Tooltip label="Profile">
          <Avatar size={'md'} name={decodedToken.username}></Avatar>
        </Tooltip>
      </div>
    </div>
  )
}
