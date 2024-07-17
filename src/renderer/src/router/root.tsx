
import MainPage from "@renderer/pages/MainPage";
import {Suspense, lazy} from "react";
import * as ReactDOM from "react-dom";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";



const Loading= <div> Loading.... </div>
const Main = lazy(()=>import("../pages/MainPage"));




const root = createHashRouter([
    {
        path:'',
        element:<Suspense fallback={Loading}> <Main/> </Suspense>  
    }

]);


export default root;