import React from 'react';
import './App.css';
import Home from './features/pages/Home';
import LoginPage from './features/pages/LoginPage';
import SignupPage from './features/pages/SignupPage';
import{
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
}from "react-router-dom"
const router = createBrowserRouter([{
  path: "/",
  element:<Home></Home>,
},
{
  path:"/login",
  element:<LoginPage></LoginPage>
},
{
  path:"/signup",
  element:<SignupPage></SignupPage>
},
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>

  );
}

export default App;
