import { createBrowserRouter } from "react-router-dom";
import { Landing } from "../views/Landing.jsx";

/**
 * react-router-dom
 * controla rutas iniciales
 */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
]);
