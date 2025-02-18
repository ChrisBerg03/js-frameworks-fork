import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { Edit } from "./routes/Edit.jsx";

const rountes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/edit",
        element: <Edit />,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={rountes} />
    </StrictMode>
);
