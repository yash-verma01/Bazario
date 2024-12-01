import React from 'react';
import './App.css';
import Home from './features/pages/Home';
import LoginPage from './features/pages/LoginPage';
import SignupPage from './features/pages/SignupPage';
import Cart from './features/cart/Cart';
import{
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
}from "react-router-dom"
import CartPage from './features/pages/CartPage';
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
{
  path:"/cart",
  element:<CartPage></CartPage>
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
