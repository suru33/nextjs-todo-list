"use client"
interface TodoItemProps {
  id: string
  title: string
  note: string
  complete: boolean
  toggleTodo: (id: string, complete: boolean) => void
}

const TodoItem = ({id, title, note, complete, toggleTodo}: TodoItemProps) => {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={e => toggleTodo(id, e.target.checked)}
      />
      <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-gray-400">{title}</label>
    </li>
  )
}

export default TodoItem