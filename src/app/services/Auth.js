import { EnvironmentVars } from '../config/env'

const login = async (username, password) => {
  try {
    const res = await fetch(
      `${EnvironmentVars.NEXT_PUBLIC_API_URL}/auth/signin`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      }
    )

    return await res.json()
  } catch (e) {
    return res.json({ message: 'Error on login', e })
  }
}

const AuthService = {
  login
}

export default AuthService
