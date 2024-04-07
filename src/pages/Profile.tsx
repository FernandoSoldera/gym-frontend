import React, { useEffect } from 'react'
import '../styles/Profile.scss'
import Header from '../components/header/Header'
import { Avatar, Button, Input } from '@chakra-ui/react'
import UserService from '../services/UserService'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import User from '../types/IUser'

export default function Profile() {
  const [user, setUser] = React.useState<User>()

  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get('token')
      const decodedToken: JwtPayload = jwtDecode(
        token === undefined ? '' : token,
      )

      const userResponse: User = await UserService.getUserById(
        Number.parseInt(decodedToken.userId),
      )
      setUser(userResponse)
    }
    fetchData().catch(console.error)
  }, [])

  interface JwtPayload {
    userId: string
  }

  return (
    <div>
      <Header></Header>
      <h1>Profile</h1>
      <div className="form">
        <Avatar size="2xl"></Avatar>
        <div className="formRow">
          <div>
            <h2>Name</h2>
            <Input value={user?.name}></Input>
          </div>
          <div>
            <h2>E-mail</h2>
            <Input value={user?.email}></Input>
          </div>
        </div>
        <div className="formRow">
          <div>
            <h2>Gender</h2>
            <Input value={user?.gender}></Input>
          </div>
          <div>
            <h2>Birthday</h2>
            <Input value={user?.birthday} type="date"></Input>
          </div>
        </div>
        <Button colorScheme="teal" className="saveButton" size="lg">
          Salvar
        </Button>
      </div>
    </div>
  )
}
