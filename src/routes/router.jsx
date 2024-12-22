import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "@/pages/Home";
import Error from "@/pages/Error";
import LostAndFound from "@/pages/AddLostAndFound";
import Login from "@/pages/Login";
import Register from "@/pages/Register";


const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error></Error>,
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/add-lost-found",
          element: <LostAndFound></LostAndFound>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },

      ]
    },
  ]);

export default router