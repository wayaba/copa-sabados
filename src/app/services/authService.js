import { envVars } from '../config/env'
import getAuthHeader from '../util/authHeader'

const SERVICE_PATH = envVars.NEXT_PUBLIC_API_URL + '/auth'

const login = async (username, password) => {
  try {
    const res = await fetch(`${SERVICE_PATH}/signin`, {
      method: 'POST',
      headers: getAuthHeader(null),
      body: JSON.stringify({
        username: username,
        password: password
      })
    })

    return await res.json()
  } catch (e) {
    return res.json({ message: 'Error on login', e })
  }
}

const AuthService = {
  login
}

export default AuthService
