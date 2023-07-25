import Todoitem from "@/components/todos/TodoItem";
import { Button } from "@/components/ui/button";
import { prisma } from "@/db";
import Link from "next/link";
import { Suspense } from "react";
import RootLoading from "./view/loading";
import TodoList from "@/components/todos/TodoList";
import { todo } from "node:test";

async function getTodos() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return prisma.todo.findMany();
}

export default async function Home() {


  return (
    <main>
     <Link href={'/view'}>Go to View Page</Link>
    </main>
  )
}
