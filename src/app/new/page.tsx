import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { prisma } from "@/db";
import { redirect } from "next/navigation";


async function createTodo(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf();
  if(typeof title === 'string' && title.length > 0) {
    await prisma.todo.create({
      data: {
        title: title,
        complete: false
      }
    })
    redirect('/');
  }

  throw new Error('Invalid title');
}

export default function New() {

    return (
      <>
       <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
      </header>
      <form action={createTodo}  className="flex gap-2 flex-col">
        <Input
          type="text"
          name="title"
            className="text-slate-800"
       
        />
        <div className="flex gap-1 justify-end">
          <Button
            type="reset"
              variant={'outline'}
              className="text-black"
          >
            Cancel
          </Button>
          <Button
            type="submit"
          >
            Create
          </Button>
        </div>
      </form>
      </>
    )
}
