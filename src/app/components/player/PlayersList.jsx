import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'
import PlayerService from '../../services/playerService'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import RemoveBtn from './RemoveBtn'


export default async function PlayersList() {
  
  const session = await getServerSession(authOptions)
  const players = await PlayerService.getAll(session)
  console.log('cargo los players..................', players.length)

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
            <RemoveBtn id={t._id}></RemoveBtn>
            <Link href={`/player/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}
