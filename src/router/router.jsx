import { createBrowserRouter } from "react-router-dom";
import { Landing } from "../views/Landing.jsx";

/**
 * react-router-dom
 * controla rutas iniciales
 * pendiente seguridad de roles
 */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
]);
