import { envVars } from '../config/env'
import getAuthHeader from '../util/authHeader'

const SERVICE_PATH = envVars.NEXT_PUBLIC_API_URL + '/tournaments'

const positions = async (name) => {
  try {
    const res = await fetch(`${SERVICE_PATH}/positions`, {
      method: 'POST',
      headers: getAuthHeader(null),
      body: JSON.stringify({
        name: name
      })
    })
    return await res.json()
  } catch (e) {
    console.log('Error', e)
  }
}

const TournamentService = {
  positions
}

export default TournamentService
