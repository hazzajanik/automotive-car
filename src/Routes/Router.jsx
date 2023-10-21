import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Root from "../Root/Root";
import AddProduct from "../components/AddProduct/AddProduct";
import MyCart from "../components/Mycart/MyCart";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import CarBrand from "../components/CarBrand/CarBrand";
import SingleCarDetail from "../components/SingleCarDetail/SingleCarDetail";
import UpdateCar from "../components/UpdateCar/UpdateCar";



const Router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=> fetch('/cars.json')
            },
            {
                path:'/addproduct',
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: "/mycart",
                element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
            },
            {
                path: "/login",
                element:<Login></Login>
            },
            {
                path: "/register",
                element:<Register></Register>
            },
            {
                path:'/car/:id',
                loader:() => fetch('https://automotive-server-side-lemon.vercel.app/car'),
                element: <PrivateRoute><CarBrand></CarBrand></PrivateRoute>
            },
            {
                path:"/singleCar/:id",
                loader:()=> fetch("https://automotive-server-side-lemon.vercel.app/car"),
                element:<SingleCarDetail></SingleCarDetail>
            },
            {
                path:'/updateCar/:id',
                element:<UpdateCar></UpdateCar>,
                loader:()=>fetch(`https://automotive-server-side-lemon.vercel.app/car`)
            }
        ]
    }
])

export default Router