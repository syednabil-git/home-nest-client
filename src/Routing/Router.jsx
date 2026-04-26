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
        path: '/propertiesDetails/:id',
        loader: ({params}) => fetch(`http://localhost:3000/products/${params.id}`),
        element: <PrivateRouter>
                <PropertiesDetails></PropertiesDetails>
        </PrivateRouter>
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