import React from 'react'
import Header from '../components/header/Header'
import { Avatar, Input } from '@chakra-ui/react'

export default function Profile() {
  return (
    <div>
      <Header></Header>
      <h1>Profile</h1>
      <div>
        <Avatar></Avatar>
        <div>
          <div>
            <h2>Name</h2>
            <Input></Input>
          </div>
          <div>
            <h2>E-mail</h2>
            <Input></Input>
          </div>
        </div>
        <div>
          <div>
            <h2>Gender</h2>
            <Input></Input>
          </div>
          <div>
            <h2>Birthday</h2>
            <Input></Input>
          </div>
        </div>
      </div>
    </div>
  )
}
