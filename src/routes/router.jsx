import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "@/pages/Home";
import Error from "@/pages/Error";
import LostAndFound from "@/pages/AddLostAndFound";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import PrivateRoute from "./PrivateRoute";
import MangeMyPage from "@/pages/MangeMyPage";
import UpdateItem from "@/pages/UpdateItem";


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
          element: <PrivateRoute><LostAndFound></LostAndFound></PrivateRoute>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/manage-my-items",
          element: <PrivateRoute><MangeMyPage></MangeMyPage> </PrivateRoute>
        },
        {
          path: "/updateItem/:id",
          loader: ({params})=> fetch(`http://localhost:5000/updateItem/${params.id}`),
          element: <PrivateRoute><UpdateItem></UpdateItem> </PrivateRoute>
        },

      ]
    },
  ]);

export default router