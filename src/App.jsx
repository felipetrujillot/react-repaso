import { router } from "./router/router"
import { RouterProvider } from 'react-router-dom'
import React from 'react'

export const App = () => {
  return (
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
  )
}