const CustomTable = ({ items, headers }) => {
  if(items.length === 0) return <></>
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="table-auto text-sm text-left text-gray-500 dark:text-gray-400 m-auto">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {headers.map((header) => {
                return (
                  <th scope="col" key={header.key} className="px-6 py-3">
                    {header.label}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  {headers.map(({ key }, subindex) => {
                    return (
                      <td key={`${index}-${subindex}`} className="px-6 py-2">
                        {item[key]}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default CustomTable
