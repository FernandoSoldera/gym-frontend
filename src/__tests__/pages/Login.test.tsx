import { render, screen } from '@testing-library/react'
import Login from '../../pages/Login'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

test('Should render inputs and login button', () => {
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
