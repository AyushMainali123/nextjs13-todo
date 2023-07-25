import { prisma } from "@/db";
import { type GetResult } from "@prisma/client/runtime/library";
import Todoitem from "./TodoItem";

type SingleTodoType = (GetResult<{
    id: string;
    title: string;
    complete: boolean;
    createdAt: Date;
    updatedAt: Date;
}, {}> & {})

interface TodoProps {
  todos: SingleTodoType[]
}

export default function TodoList({ todos }: TodoProps) {
  
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
    <ul className="pl-4">
          {todos.map(todo => (
            <Todoitem key={todo.id} {...todo} toggleTodo={toggleTodo} />
          ))}
    </ul>
  )
}
