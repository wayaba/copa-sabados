'use client'

import { useEffect, useState } from 'react'
import PlayerService from '../services/playerService'
import { useSession } from 'next-auth/react'
import CustomTable from '../components/CustomTable'

export default function Player() {
  const { data: session } = useSession()
  const [players, setPlayers] = useState([])
  const headers = [{ key: 'name', label: 'Name' }]
  const fetchPlayers = async (session) => {
    const resp = await PlayerService.getAll(session)
    setPlayers(resp)
  }

  useEffect(() => {
    fetchPlayers(session)
  }, [session])

  return (
    <div className="flex flex-col md:flex-row">
      <section className="w-full">
        <div className="flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
          <div className="flex flex-wrap">
            <div className="w-full p-6">ESTA ES LA PAGINA DE LOS PLAYERS</div>
            <CustomTable items={players} headers={headers}></CustomTable>
          </div>
        </div>
      </section>
    </div>
  )
}
