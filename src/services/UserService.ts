import httpClient from '../httpClient'
import IUserLogin from '../types/IUserLogin'

const login = async (user: IUserLogin): Promise<boolean> => {
  const response = await httpClient.post('/user/login', user)
  return response.data
}

const UserService = {
  login,
}

export default UserService
