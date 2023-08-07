import { router } from "./router/router";
import { RouterProvider } from "react-router-dom";
import React from "react";

/**
 * Inicialización de Router y render de React
 * @returns jsx
 * @author FT
 */
export const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};
