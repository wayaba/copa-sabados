import HomeClient from './client'
import TournamentService from './services/tournamentService'

export const dynamic = 'force-dynamic'
export default async function Home() {
  const positions = await TournamentService.positions()
  return <HomeClient positions={positions} />
}
