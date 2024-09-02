import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import LoginPage from "./pages/login";
import HomePage from "./pages/home";


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
      path: "/home",
      element: <HomePage />,
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
