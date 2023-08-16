import Clientside from "./Clientside"
import { trpc } from "./trpc"

export default async function Home() {
  const { greeting } = await trpc.hello.query({ name: 'sid' })
  return <div>
    <p>Server side: {greeting}</p>
    <Clientside />
  </div>
}