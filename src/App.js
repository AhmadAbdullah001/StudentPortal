import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import Details from './components/Details';
function App() {
  // Create your routes
  const routes = [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup/>,
    },
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/details",
      element: <Details/>,
    }
  ];

  // Create the router instance
  const router = createBrowserRouter(routes);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
