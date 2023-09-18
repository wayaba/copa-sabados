import { EnvironmentVars } from '../config/env'

const SERVICE_PATH = EnvironmentVars.NEXT_PUBLIC_API_URL + '/players'

const getAll = async () => {
  try {
    const res = await fetch(`${SERVICE_PATH}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return await res.json()
  } catch (e) {
    return res.json({ message: 'Error on players getAll', e })
  }
}

const PlayerService = {
  getAll
}

export default PlayerService
