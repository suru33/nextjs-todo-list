import Link from "next/link";
import TodoItem from "@/components/TodoItem";
import {getAll, toggle} from "@/todo-repository";

export default async function Home() {

  const todos = await getAll()

  const toggleTodo = async (id: string, complete: boolean) => {
    "use server"

    await toggle(id, complete)
  }

  return (
    <>
      <header className="flex justify-evenly items-center mb-4">
        <h1 className="text-2xl"> Todos </h1>
        <Link href="/new">new</Link>
      </header>
      <ul className="p-10">
        {
          todos.map(todo => (<TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}  />))
        }
      </ul>
    </>
  )
}
