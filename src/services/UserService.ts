import httpClient from '../httpClient'
import IUserLogin from '../types/IUserLogin'
import User from '../types/IUser'

const login = async (user: IUserLogin): Promise<any> => {
  try {
    const response = await httpClient.post('/user/login', user)
    return response
  } catch (error: any) {
    console.log(error)
    return error.response
  }
}

const getUserById = async (id: number): Promise<User> => {
  try {
    const response = await httpClient.get('/user/' + id)
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

const updateUser = async (user: User): Promise<User> => {
  try {
    const response = await httpClient.put('/user/', user)
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

const UserService = {
  login,
  getUserById,
  updateUser,
}

export default UserService
