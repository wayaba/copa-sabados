let lista = [
  { playerName: 'Mauro', totalPoints: 69, played: 25, win: 13, draw: 5, lost: 7 },
  { playerName: 'Bilos', totalPoints: 66, played: 24, win: 12, draw: 6, lost: 6 },
  { playerName: 'Mariano', totalPoints: 65, played: 26, win: 11, draw: 6, lost: 9 },
  { playerName: 'Omar', totalPoints: 65, played: 23, win: 13, draw: 3, lost: 6 },
  { playerName: 'Ariel', totalPoints: 65, played: 22, win: 13, draw: 4, lost: 5 },
  { playerName: 'Nico', totalPoints: 64, played: 27, win: 11, draw: 4, lost: 11 },
  { playerName: 'Pity', totalPoints: 63, played: 27, win: 10, draw: 6, lost: 10 },
  { playerName: 'Mario', totalPoints: 63, played: 23, win: 12, draw: 4, lost: 6 },
  { playerName: 'Rocky', totalPoints: 62, played: 30, win: 9, draw: 5, lost: 14 },
  { playerName: 'Claudio', totalPoints: 59, played: 28, win: 9, draw: 4, lost: 14 },
  { playerName: 'Luis', totalPoints: 57, played: 30, win: 7, draw: 6, lost: 16 },
  { playerName: 'Ale G', totalPoints: 53, played: 20, win: 9, draw: 6, lost: 4 }
]
const Table = ({positions}) => {
  
  if(positions.length > 0) lista = positions
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
                  key={item.playerName}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    {item.playerName}
                  </th>
                  <td className="px-6 py-2">{item.totalPoints}</td>
                  <td className="px-6 py-2">
                    {item.played}
                  </td>
                  <td className="px-6 py-2">{item.win}</td>
                  <td className="px-6 py-2">
                    {item.draw}
                  </td>
                  <td className="px-6 py-2">{item.lost}</td>
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
