'use client'

import Link from 'next/link'
import { HiPencilAlt, HiOutlineTrash } from 'react-icons/hi'
import PlayerService from '../services/playerService'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const PlayersList = () => {
  const { data: session } = useSession()
  const [players, setPlayers] = useState([])
  const router = useRouter()

  const fetchPlayers = async (session) => {
    const resp = await PlayerService.getAll(session)
    setPlayers(resp)
  }

  useEffect(() => {
    if(session)fetchPlayers(session)
  }, [session])

  const removePlayer = async (id) =>{
    console.log()
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
        console.log(id)
        const res = await PlayerService.remove(session, id)
        fetchPlayers(session)
    }
  }
  return (
    <>
      {players.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 bg-white rounded-lg my-3 flex justify-between gap-5 items-start max-w-md mx-auto"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.name},{t.lastName}</h2>
            <div>{t.nickname}</div>
          </div>
          <div className="flex gap-2">
            <button onClick={()=>removePlayer(t._id)} className="text-red-400">
              <HiOutlineTrash size={24} />
            </button>
            <Link href={`/player/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}

export default PlayersList
