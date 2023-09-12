const Footer = () => {
  return (
<footer className="px-5 md:px-3 bg-pallete-light dark:bg-dark-body py-8">
          <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
            <li className="w-full">
              <a
                href="#"
                className="inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
                aria-current="page"
              >
                Tabla
              </a>
            </li>
            <li className="w-full">
              <a
                href="#"
                className="inline-block w-full p-4 bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                Último Partido
              </a>
            </li>
          </ul>
        </footer>
  )
}

export default Footer