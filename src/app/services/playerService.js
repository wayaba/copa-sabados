import { envVars } from '../config/env'
import getAuthHeader from '../util/authHeader'

const SERVICE_PATH = envVars.NEXT_PUBLIC_API_URL + '/players'

const getAll = async (session) => {
  try {
    const res = await fetch(`${SERVICE_PATH}`, {
      method: 'GET',
      headers: getAuthHeader(session)
    })
    return await res.json()
  } catch (e) {
    console.log('Error', e)
  }
}

const PlayerService = {
  getAll
}

export default PlayerService
