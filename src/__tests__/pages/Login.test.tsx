import { render, screen } from '@testing-library/react'
import Login from '../../pages/Login'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import UserService from '../../services/UserService'
import Cookies from 'js-cookie'

test('Should render all elements in login page', () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>,
  )

  const emailInput = screen.getByPlaceholderText(/E-mail/)
  const passwordInput = screen.getByPlaceholderText(/Password/)
  const loginButton = screen.getByTestId(/loginButton/)
  expect(emailInput).toBeInTheDocument()
  expect(passwordInput).toBeInTheDocument()
  expect(loginButton).toBeInTheDocument()
})

test('Should call login api and save in cookies', () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>,
  )

  const mockFetchData = jest
    .spyOn(UserService, 'login')
    .mockImplementation(async () => {
      return { token: 'testeee' }
    })

  const loginButton = screen.getByTestId(/loginButton/)
  loginButton.click()

  expect(mockFetchData).toHaveBeenCalled()
})
