import Link from "next/link";
import {redirect} from "next/navigation";
import {save} from "@/todo-repository";

const saveTodo = async (data: FormData) => {
  "use server"

  const title = data.get("title")?.valueOf()
  const note = data.get("note")?.valueOf()
  await save(title, note)
  redirect("/")
}

const NewTodo = () => {
  return (
    <>
      <header className="flex justify-evenly items-center mb-4">
        <h1 className="text-2xl">Create Todo</h1>
      </header>
      <form className="flex gap-2 flex-col" action={saveTodo}>
        <input type="text" name="title" placeholder="Title"
               className="border border-slate-300 rounded focus-within:border-slate-100 outline-none bg-transparent p-2"/>
        <textarea name="note" placeholder="Note"
                  className="border border-slate-300 rounded focus-within:border-slate-100 outline-none bg-transparent p-2"/>
        <div className="flex gap-2 justify-end">
          <Link href="..">Cancel</Link>
          <button type="submit">Save</button>
        </div>
      </form>
    </>
  )
}

export default NewTodo