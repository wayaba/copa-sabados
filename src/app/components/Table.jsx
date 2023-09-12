const lista = [
  { player: 'Mauro', pts: 69, gamesPlayed: 25, win: 13, tied: 5, lose: 7 },
  { player: 'Bilos', pts: 66, gamesPlayed: 24, win: 12, tied: 6, lose: 6 },
  { player: 'Mariano', pts: 65, gamesPlayed: 26, win: 11, tied: 6, lose: 9 },
  { player: 'Omar', pts: 65, gamesPlayed: 23, win: 13, tied: 3, lose: 6 },
  { player: 'Ariel', pts: 65, gamesPlayed: 22, win: 13, tied: 4, lose: 5 },
  { player: 'Nico', pts: 64, gamesPlayed: 27, win: 11, tied: 4, lose: 11 },
  { player: 'Pity', pts: 63, gamesPlayed: 27, win: 10, tied: 6, lose: 10 },
  { player: 'Mario', pts: 63, gamesPlayed: 23, win: 12, tied: 4, lose: 6 },
  { player: 'Rocky', pts: 62, gamesPlayed: 30, win: 9, tied: 5, lose: 14 },
  { player: 'Claudio', pts: 59, gamesPlayed: 28, win: 9, tied: 4, lose: 14 },
  { player: 'Luis', pts: 57, gamesPlayed: 30, win: 7, tied: 6, lose: 16 },
  { player: 'Ale G', pts: 53, gamesPlayed: 20, win: 9, tied: 6, lose: 4 }
]
const Table = () => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="table-auto text-sm text-left text-gray-500 dark:text-gray-400 m-auto">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Jugador
              </th>
              <th scope="col" className="px-6 py-3">
                PTS
              </th>
              <th scope="col" className="px-6 py-3">
                PJ
              </th>
              <th scope="col" className="px-6 py-3">
                G
              </th>
              <th scope="col" className="px-6 py-3">
                E
              </th>
              <th scope="col" className="px-6 py-3">
                P
              </th>
            </tr>
          </thead>
          <tbody>
            {lista.map((item) => {
              return (
                <tr
                  key={item.player}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    {item.player}
                  </th>
                  <td className="px-6 py-4">{item.pts}</td>
                  <td className="px-6 py-4">
                    {item.gamesPlayed}
                  </td>
                  <td className="px-6 py-4">{item.win}</td>
                  <td className="px-6 py-4">
                    {item.tied}
                  </td>
                  <td className="px-6 py-4">{item.lose}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table
