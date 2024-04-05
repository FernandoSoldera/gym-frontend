import { AxiosError } from 'axios'
import httpClient from '../httpClient'
import IUserLogin from '../types/IUserLogin'

const login = async (user: IUserLogin): Promise<any> => {
  try {
    const response = await httpClient.post('/user/login', user)
    return response
  } catch (error: any) {
    console.log(error)
    return error.response
  }
}

const UserService = {
  login,
}

export default UserService
