import { envVars } from '../config/env'
import getAuthHeader from '../util/authHeader'

const SERVICE_PATH = envVars.NEXT_PUBLIC_API_URL + '/players'

const getAll = async (session) => {
  try {
    const res = await fetch(`${SERVICE_PATH}`, {
      method: 'GET',
      cache: 'no-cache',
      headers: getAuthHeader(session)
    })
    if (!res.ok) {
      throw new Error('Failed to get all')
    }
    return await res.json()
  } catch (e) {
    console.log('Error', e)
  }
}

const getById = async (session, id) => {
  try {
    const res = await fetch(`${SERVICE_PATH}/${id}`, {
      method: 'GET',
      headers: getAuthHeader(session)
    })
    if (!res.ok) {
      throw new Error('Failed to get by id')
    }
    return await res.json()
  } catch (e) {
    console.log('Error', e)
  }
}

const create = async (session, payload) => {
  try {
    const res = await fetch(`${SERVICE_PATH}`, {
      method: 'POST',
      headers: getAuthHeader(session),
      body: JSON.stringify(payload)
    })
    if (!res.ok) {
      throw new Error('Failed to create')
    }
    return await res.json()
  } catch (e) {
    console.log('Error', e)
  }
}

const remove = async (session, id) => {
  try {
    const res = await fetch(`${SERVICE_PATH}/${id}`, {
      method: 'DELETE',
      headers: getAuthHeader(session)
    })
    if (!res.ok) {
      throw new Error('Failed to delete')
    }
    return await res.json()
  } catch (e) {
    console.log('Error', e)
  }
}

const PlayerService = {
  getAll,
  getById,
  create,
  remove
}

export default PlayerService
