import { EnvironmentVars } from '../config/env'
const SERVICE_PATH = EnvironmentVars.NEXT_PUBLIC_API_URL + '/tournaments'

const positions = async (name) => {
  try {
    const res = await fetch(`${SERVICE_PATH}/positions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
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
