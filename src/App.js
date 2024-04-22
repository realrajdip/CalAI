import Login from "./components/auth/login";
import Register from "./components/auth/register";

import Header from "./components/header";
import Home from "./components/home";

import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";
import PayPal from "./components/PayPal";
import { useState } from "react";
import './App.css'
function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ];
  let routesElement = useRoutes(routesArray);
  const [checkout, setCheckOut] = useState(false);
  return (
    <AuthProvider>
      {/* <Header />
      <div className="w-full h-screen flex flex-col">
      
      </div>  */}
      <div>
      {routesElement}
      </div>
      <div className="App">
   
      {checkout ? (
        <PayPal />
      ) : (

        <div className='border-4 rounded-lg p-3'> 
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="shoe" className="rounded-lg"/>
          <pre className='text-xl m-3'>Nike Shoe         20$</pre>
          <button onClick={() => {
            setCheckOut(true);
          }} className="bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-400">Checkout</button>
        </div>
          
      )}
    </div>
    
     
    </AuthProvider>
  );
}

export default App;
