import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Users from './Components/Users/Users.jsx';
import UserDetails from './Components/Userdetails/UserDetails.jsx';
import Posts from './Components/Posts/Posts.jsx';
import Services from './Components/Services/Services.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/users",
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
        ,element: <Users></Users>,
      },
      {
        path: "/user/:userId",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/
 ${params.userId}`),
        element: <UserDetails></UserDetails>,
      },
    {
      path:"/posts",
      loader:()=>fetch("https://jsonplaceholder.typicode.com/posts"),
      element:<Posts></Posts>
    },
    {
      path:"/services",
      element:<Services></Services>
    }
    

    ],
  },
  {
    path: "/contacts",
    element: <div>i am in the contacts page</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
