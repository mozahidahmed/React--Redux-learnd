import { createBrowserRouter } from "react-router-dom";
import GetData from "../Home/GetData/GetData";
import Home from "../Home/Home";




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
      
      
      
    ],
  },
]);

export default Routes;



 