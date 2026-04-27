import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Registration from "../components/Registration";
import Login from "../components/Login";
import MyRating from "../components/MyRating";
import AddProperty from "../components/AddProperty";
import Home from "../components/Home";
import AllProperty from "../components/AllProperty";
import PrivateRouter from "./PrivateRouter";
import MyProperty from "../components/MyProperty";
import PropertiesDetails from "../components/PropertiesDetails";
import EditProperties from "../components/EditProperties";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-product",
        element: <AllProperty></AllProperty>
      },
      {
      path: "/propertiesDetails/:id",
      loader: async ({ params }) => {
      const res = await fetch(`http://localhost:3000/products/${params.id}`);
      return res.json();
      },
        element: <PropertiesDetails />
      },
      {
        path: "/my-rating",
        element: (
          <PrivateRouter>
            <MyRating></MyRating>
          </PrivateRouter>
        ),
      },
      {
        path: "/add-property",
        element: (
          <PrivateRouter>
            <AddProperty></AddProperty>
          </PrivateRouter>
        ),
      },
      {
        path: "/my-property",
        element: (
          <PrivateRouter>
            <MyProperty></MyProperty>
          </PrivateRouter>
        ),
      },
      {
        path: "/edit-properties/:id",
        element: <EditProperties></EditProperties>,
      },
      
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/registration",
    element: <Registration></Registration>
  },
]);