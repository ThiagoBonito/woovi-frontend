import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import { PixPage } from "./pages/pix";
import { HeaderLayout } from "./layouts/header";
import { PixTransfer } from "./pages/pix/transfer";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      element: <HeaderLayout />,
      children: [
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/pix",
          element: <PixPage />,
        },
        {
          path: "/pix/:id/transfer",
          element: <PixTransfer />
        }
      ]
    },
  ]);

  return (
    <RouterProvider
    router={router}
    fallbackElement={<div>Loading...</div>}
    />
  )
}

export default App
