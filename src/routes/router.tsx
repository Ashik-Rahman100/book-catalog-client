import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AddBook from "../pages/AddBook";
import AllBooks from "../pages/AllBooks";
import EditBook from "../pages/EditBook";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Signup from "../pages/Signup";
import SingleBook from "../pages/SingleBook";
import WishList from "../pages/WishList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/books",
        element: <AllBooks />,
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
      },
      {
        path: "/book/addBook",
        element: <AddBook />,
      },
      {
        path: "/editBook/:id",
        element: <EditBook />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
