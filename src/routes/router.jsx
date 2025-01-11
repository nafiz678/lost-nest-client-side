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
import AllLostAndFoundItems from "@/pages/AllLostAndFoundItems";
import CardDetailsPage from "@/pages/CardDetailsPage";
import AllRecovered from "@/pages/AllRecovered";
import AboutUs from "@/pages/AboutUs";





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
          path: "/myItems",
          element: <PrivateRoute><MangeMyPage></MangeMyPage> </PrivateRoute>
        },
        {
          path: "/allRecovered",
          element: <PrivateRoute><AllRecovered></AllRecovered> </PrivateRoute>
        },
        {
          path: "/allItems",
          element: <AllLostAndFoundItems></AllLostAndFoundItems>
        },
        {
          path: "/updateItem/:id",
          loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/item/${params.id}`),
          element: <PrivateRoute><UpdateItem></UpdateItem> </PrivateRoute>
        },
        {
          path: "/item/:id",
          loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/item/${params.id}`),
          element: <PrivateRoute> <CardDetailsPage></CardDetailsPage> </PrivateRoute>
        },
        {
          path: "/aboutUs",
          element: <AboutUs></AboutUs> ,
        },

      ]
    },
  ]);

export default router