import { useStore } from "./store.js";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
    const { todos, setTodos } = useStore();

    return (
        <>
            <Link to={"/edit"} className="bg-red-300 p-2 rounded-2xl">
                To edit
            </Link>
            <h1 className="text-amber-600">Todos</h1>
            <form
                action=""
                onSubmit={(e) => {
                    e.preventDefault();
                    const inputValue =
                        document.querySelector("#todoInput").value;
                    if (inputValue.length > 0) {
                        setTodos([
                            ...todos,
                            {
                                id: todos.length
                                    ? todos[todos.length - 1].id + 1
                                    : 1,
                                text: inputValue,
                            },
                        ]);
                    }
                    console.log(todos);
                }}
            >
                <label htmlFor="todoInput">Todo item</label>
                <input
                    placeholder="Write something"
                    id="todoInput"
                    name="todoInput"
                    type="text"
                    className="border block"
                />
                <button type="submit" className="border rounded p-1">
                    add
                </button>
            </form>
            <hr />
            <div>
                {todos.map((item) => {
                    return <p key={item.id}>{item.text}</p>;
                })}
            </div>
        </>
    );
}

export default App;
