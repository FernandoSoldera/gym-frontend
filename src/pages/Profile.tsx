import React, { useEffect, ChangeEvent } from 'react'
import '../styles/Profile.scss'
import Header from '../components/header/Header'
import { Avatar, Button, Input, Select } from '@chakra-ui/react'
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    if (user)
      setUser({
        ...user,
        [name]: value,
      })
  }

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.target
    if (user)
      setUser({
        ...user,
        [name]: value,
      })
  }

  const saveUser = () => {
    console.log(user)
  }

  return (
    <div>
      <Header></Header>
      <h1>Profile</h1>
      <div className="form">
        <Avatar size="2xl"></Avatar>
        <div className="formRow">
          <div className="formCell">
            <h2>Name</h2>
            <Input
              value={user?.name}
              name="name"
              onChange={handleChange}
            ></Input>
          </div>
          <div className="formCell">
            <h2>E-mail</h2>
            <Input
              value={user?.email}
              name="email"
              onChange={handleChange}
            ></Input>
          </div>
        </div>
        <div className="formRow">
          <div className="formCell">
            <h2>Gender</h2>
            <Select name="gender" onChange={handleChangeSelect}>
              <option value="male" selected={user?.gender === 'male'}>
                Male
              </option>
              <option value="female" selected={user?.gender === 'female'}>
                Female
              </option>
            </Select>
          </div>
          <div className="formCell">
            <h2>Birthday</h2>
            <Input
              value={user?.birthday}
              type="date"
              name="birthday"
              onChange={handleChange}
            ></Input>
          </div>
        </div>
        <Button
          colorScheme="teal"
          className="saveButton"
          size="lg"
          onClick={saveUser}
        >
          Salvar
        </Button>
      </div>
    </div>
  )
}
