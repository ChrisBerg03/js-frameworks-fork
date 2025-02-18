import { Link } from "react-router-dom";
import { useStore } from "../store";

export function Edit() {
    const { todos, removeTodo } = useStore();
    return (
        <>
            <Link className="bg-red-300 p-2 rounded-2xl" to={"/"}>
                Home
            </Link>
            <h1>Edit page</h1>
            <hr />
            {todos.map((item) => (
                <div key={item.id} className="flex gap-2">
                    <p>{item.text}</p>
                    <button
                        className="border border-red-500 cursor-pointer"
                        onClick={() => {
                            removeTodo(item.id);
                        }}
                    >
                        delete
                    </button>
                </div>
            ))}
        </>
    );
}
