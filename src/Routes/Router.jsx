import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import SignUp from "../Components/Signup/Signup";
import Login from "../Components/Login/Login";
import Product from "../Components/Product/Product";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/product",
        element: <Product></Product>,
      },
      
    ],
  },
  
]);
export default router;
