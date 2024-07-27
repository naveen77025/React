import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/ContactUs";
import Menu from "./components/Menu";
import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import About from "./components/ABout";
 
const AppContainer = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
};
const appRouter= createBrowserRouter([{
    path:"/",
    element:<AppContainer/>,
    children:[
        {
            path:'/',
            element:<Body/>   
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/contact',
            element:<Contact/>
        },
        {
            path:'/restaurant/:resId',
            element:<Menu/>
        }
    ]
},  
])
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);