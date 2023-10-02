import PlayersList from '../components/player/PlayersList'
import Link from 'next/link'

export default async function Player() {
  return (
    <section className="flex flex-col md:flex-row mt-12 md:mt-2 p-6">
      <div className="flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
        <div className="flex justify-between">
          <h2 className="font-bold text-2xl">Jugadores</h2>
          <Link
            className="p-2 bg-gray-800 hover:bg-gray-600 text-white rounded-lg"
            href={'/player/add'}
          >
            Agregar
          </Link>
        </div>
        <PlayersList></PlayersList>
      </div>
    </section>
  )
}
