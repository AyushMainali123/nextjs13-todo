'use client';


interface TodoItemProps {
    id: string;
    title: string;
    complete: boolean;
    toggleTodo: (id: string, checked: boolean) => void;
}

export default  function Todoitem({ complete, id, title, toggleTodo }: TodoItemProps) {

    return (
        <li className="flex gap-1 items-center">
            <input type="checkbox"
              id={id}
              className="cursor-pointer peer"
              defaultChecked={complete}
              onChange={(e) => toggleTodo(id, e.target.checked)}
            />
            
            <label
                htmlFor={id}
                className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
            >
                {title}
            </label>
        </li>
    )
}
