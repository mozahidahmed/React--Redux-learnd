import { createBrowserRouter } from "react-router-dom";
import GetData from "../Home/GetData/GetData";
import Home from "../Home/Home";
import Cart from "../pages/Cart";




const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: "/",
        element: <GetData/>,
      },
      {
        path: "/home",
        element: <GetData/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      
      
      
    ],
  },
]);

export default Routes;



 