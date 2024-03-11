import { createBrowserRouter } from "react-router-dom";
import LogIn from "./LogIn";
import Register from "./Register";
import SignIn from "./SignIn";
import MainView from "./MainView";




export const router = createBrowserRouter([

{
    path:'/', 
    element:<LogIn/>,

},
{

    path:'/Register', 
    element: <Register/>,

}, 
{

    path:'/SignIn', 
    element:<SignIn/>,

},
{

    path:'/MainView',
    element:<MainView/>

},



]);