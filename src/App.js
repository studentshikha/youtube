import { Provider, useSelector } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {

 

  return (
    <Provider store={store}>
    <div className="">
   <Head/>
   <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}



const appRouter=createBrowserRouter([{
  path : "/",
  element:<Body/>,
  children:[
     {
      path:"/",
     element:<MainContainer/>
    },
    
    {
      path:"/watch",
        element:<WatchPage/> 
      
    
    }

  ]
}
]

)
export default App;
