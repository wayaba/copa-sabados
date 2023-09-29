import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import PlayerService from "@/app/services/playerService";
import { getServerSession } from "next-auth";

export default async function EditPlayer({ params }) {
  const { id } = params;
  const session = await getServerSession(authOptions)
  const resp= await PlayerService.getById(session, id);
  const { name } = resp;
  console.log(name)

  return (
    <div>
        aaa {name}
    </div>
  );
}