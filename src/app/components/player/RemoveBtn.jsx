"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import PlayerService from '../../services/playerService'

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const { data: session } = useSession()

  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      await PlayerService.remove(session, id)
      router.refresh();
    }
  };

  return (
    <button onClick={removeTopic} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}