import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import NotFound from './pages/404/NotFound';
import Loginpage from "./pages/auth/Loginpage";

const AppRouting = () =>{
  const loggedIn = true;

  const router = createBrowserRouter([
    {
      path: "/",
      element: loggedIn?<Dashboard/>:<Loginpage/>,
      errorElement: <NotFound/>,
    },
    {
      path: "/login",
      element: <Loginpage/>
    },
  ]);
    return (
      <RouterProvider router={router} />
    )
}

export default AppRouting;