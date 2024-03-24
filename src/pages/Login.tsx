import { Box, Button, Flex, Image, Input, useToast } from '@chakra-ui/react'
import React from 'react'
import '../styles/Login.scss'
import IUserLogin from '../types/IUserLogin'
import UserService from '../services/UserService'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const toast = useToast()

  const [email, setEmail] = React.useState('')
  const handleEmailChange = (event: any) => setEmail(event.target.value)

  const [password, setPassword] = React.useState('')
  const handlePasswordChange = (event: any) => setPassword(event.target.value)

  const login = async () => {
    const data: IUserLogin = {
      email,
      password,
    }
    const response = await UserService.login(data)
    if (response) {
      navigate('/')
    } else {
      toast({
        position: 'top-right',
        title: 'Login error',
        description: 'E-mail or password is invalid',
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
  }

  return (
    <Flex direction={'row'} className="loginPage">
      <Box flex={1} className="imageBox"></Box>
      <Box flex={1} className="fieldsBox">
        <Image src="logo.jpg"></Image>
        <h1>Login</h1>
        <Flex className="fieldsFlex">
          <div>
            <h2>E-mail</h2>
            <Input placeholder="E-mail" onChange={handleEmailChange}></Input>
          </div>
          <div>
            <h2>Password</h2>
            <Input
              placeholder="Password"
              type="password"
              onChange={handlePasswordChange}
            ></Input>
          </div>
          <h2>Esqueceu sua senha?</h2>
        </Flex>
        <Button data-testid="loginButton" colorScheme="green" onClick={login}>
          Entrar
        </Button>
      </Box>
    </Flex>
  )
}
