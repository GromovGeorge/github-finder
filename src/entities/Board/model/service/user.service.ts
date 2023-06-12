import { IGithubUser } from 'app/types'
import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

export default class UserService {
  static async getUser(username: string) {
    const URL = API_URL + username
    const res = await axios.get<IGithubUser>(URL)
    return res
  }
}
