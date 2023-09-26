'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import PlayerService from '@/app/services/playerService'
import { useSession } from 'next-auth/react'

const UpdatePlayer = () => {
  const { data: session } = useSession()
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [nickname, setNickname] = useState('')

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name || !lastName || !nickname) {
      alert('Title and description and nickname are required.')
      return
    }

    try {
      const payload = {
        name: name,
        lastName: lastName,
        nickname: nickname
      }
      const newPlayer = await PlayerService.create(session, payload)
      console.log('el nuevo player', newPlayer)
      router.push("/player");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Nombre"
      />

      <input
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Apellido"
      />

      <input
        onChange={(e) => setNickname(e.target.value)}
        value={nickname}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Apodo"
      />

      <Link
        type="button"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
        href={'/player'}
      >
        Cancelar
      </Link>
      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Guardar
      </button>
    </form>
  )
}

export default AddPlayer
