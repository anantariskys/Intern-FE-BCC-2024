import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./visibility/PrivateRoute";
import Home from "../pages/Home";
import Profil from "../pages/Profil";
import GuestRoute from "./visibility/GuestRoute";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Preloved from "../pages/Preloved";
import PrelovedDetail from "../pages/PrelovedDetail";
import PageLayout from "../components/layout/PageLayout";
import Verifikasi from "../pages/Verifikasi";
import TambahPreloved from "../pages/TambahPreloved";
import Jastip from "../pages/Jastip";
const createRouter = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout><Home /></PageLayout>,
    
  },
  {
    path: "/preloved",
    element: <PageLayout><Preloved /></PageLayout>,
    
  },
  {
    path: "/preloved/:id",
    element: <PageLayout>< PrelovedDetail/></PageLayout>,
    
  },
  {
    path: "/jastip",
    element: <PageLayout><Jastip /></PageLayout>,
    
  },
  {
    path:'/',
    element: <PrivateRoute />,
    children: [
      {
        path: "profile",
        element: <PageLayout><Profil/></PageLayout>,
      },
      {
        path: "verifikasi",
        element:  <Verifikasi/>,
      },
      {
        path: "/preloved/add",
        element: <PageLayout> <TambahPreloved/></PageLayout>,
      },
    ],
  },
  {
    path:'/',
    element: <GuestRoute />,
    children: [
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "register",
        element: <Register/>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const Route = () => {
  return <RouterProvider router={createRouter} />;
};

export default Route;