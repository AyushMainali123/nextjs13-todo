import TodoList from "@/components/todos/TodoList";
import { Button } from "@/components/ui/button";
import { prisma } from "@/db";
import Link from "next/link";
import { Suspense } from "react";
import RootLoading from "./loading";


async function getTodos() {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  return prisma.todo.findMany();
}

export default async function ViewPage() {

  const todos = await getTodos();

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
      <Suspense fallback={<RootLoading />}>
        <TodoList todos={todos} />
      </Suspense>
    </main>
  )
}
