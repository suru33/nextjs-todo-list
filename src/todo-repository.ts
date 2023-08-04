import {prisma} from "@/db";

export const getAll = async () => await prisma.todo.findMany()

export const save = async (title: any, note: any) => {
  if (typeof title === "string" && typeof note === "string" && title.trim().length > 0) {
    await prisma.todo.create({
      data: {
        title: title.trim(), note: note.trim(), complete: false
      }
    })
  } else {
    throw Error("Invalid data")
  }
}

export const toggle = async (id: string, complete: boolean) => {
  await prisma.todo.update({
    where: {id},
    data: {complete}
  })
}
