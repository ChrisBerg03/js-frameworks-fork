import { create } from "zustand";

export const useStore = create((set) => ({
    todos: [
        {
            id: 1,
            text: "first",
        },
        {
            id: 2,
            text: "second",
        },
    ],
    setTodos: (todos) => set({ todos: todos }),
    removeTodo: (id) =>
        set((state) => ({
            todos: state.todos.filter((item) => item.id !== id),
        })),
}));
