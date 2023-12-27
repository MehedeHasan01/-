import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layouts/Roots";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";

const Routers = createBrowserRouter([
    {
        path: '/',
        element: <Roots/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path: '/about',
                element:<About/>
            }
        ]
    }
])

export default Routers;