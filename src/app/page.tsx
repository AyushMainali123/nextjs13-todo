import Todoitem from "@/components/todos/TodoItem";
import { Button } from "@/components/ui/button";
import { prisma } from "@/db";
import Link from "next/link";

function getTodos() {
  return prisma.todo.findMany();
}

export default async function Home() {

  const todos = await getTodos();

  async function toggleTodo(id: string, checked: boolean) {
    'use server';
    await prisma.todo.update({
      where: {
        id
      },
      data: {
        complete: checked,
      }
    })
  }

  return (
    <main>
     <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Button asChild>
          <Link href="/new">
            New
          </Link>
        </Button>
      </header>
      <ul className="pl-4">
        {todos.map(todo => (
          <Todoitem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </main>
  )
}
