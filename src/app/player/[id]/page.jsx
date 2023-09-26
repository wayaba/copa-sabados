import PlayerService from "@/app/services/playerService";
import { getServerSession } from "next-auth";

// const getTopicById = async (id) => {
//   try {
//     const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch topic");
//     }

//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

export default async function EditTopic({ params }) {
  const { id } = params;
  const session = await getServerSession({});
  console.log(session)
  //const { topic } = await PlayerService.getById(id);
  //const { title, description } = topic;

  return (
    <div>
        aaa
    </div>
  );
}