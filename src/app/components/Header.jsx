'use client'

import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from 'react'
import Link from 'next/link';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(false)
  const { data: session, status } = useSession();

  const handleOpenDropdown = () => {
    setOpenDropdown(!openDropdown)
  }
  return (
    <header>
      <nav
        aria-label="menu nav"
        className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0"
      >
        <div className="flex flex-wrap items-center">
          <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
            <a href="/" aria-label="Home">
              <span className="text-xl pl-2">
                <i className="em em-grinning"></i>
              </span>
            </a>
          </div>

          <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
            <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
              <li className="flex-1 md:flex-none md:mr-3">
                <Link
                  className="inline-block py-2 px-4 text-white no-underline"
                  href="/"
                >
                  Tabla
                </Link>
              </li>
              <li className="flex-1 md:flex-none md:mr-3">
                <Link
                  className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                  href="#"
                >
                  Último partido
                </Link>
              </li>
              <li className="flex-1 md:flex-none md:mr-3">
                <div className="relative inline-block">
                {session?.user ? (
                    <button
                    onClick={handleOpenDropdown}
                    className="drop-button text-white py-2 px-2"
                  >
                    {' '}
                    <span className="pr-2">
                      <i className="em em-robot_face"></i>
                    </span>{' '}
                    Hola, {session?.user.username}{' '}
                    <svg
                      className="h-3 fill-current inline"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                ) :  (
                    <Link
                    href="/login"
                    className="drop-button text-white py-2 px-2"
                  >
                    {' '}
                    Login{' '}
                  </Link>
                ) }
                  
                  <div
                    id="myDropdown"
                    className={`absolute bg-gray-800 text-white right-0 mt-3 p-1 rounded-xl overflow-auto z-30 ${
                      openDropdown ? '' : 'invisible'
                    }`}
                  >
                    <Link
                  className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                  href="/player"
                  onClick={handleOpenDropdown}
                >
                  Jugadores
                </Link>
                    <div className="border border-gray-800"></div>
                    <button
                      onClick={() => signOut()}
                      className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                    >
                      <i className="fas fa-sign-out-alt fa-fw"></i> Log Out
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
