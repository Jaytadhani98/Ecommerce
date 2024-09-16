import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Addproduct from "./Pages/Addproduct";
import Product from "./Pages/Product";
import Logout from "./Components/Logout";
import Home from "./Pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pages/All.css'
import DeleteProduct from "./Components/DeleteProduct";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Purchaseform from "./Components/Purchaseform";



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get('access_token');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Public Home Route */}
          <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />

          {/* Auth Routes */}
          <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/signup" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Signup />} />
          <Route path="/logout" element={isAuthenticated ? <Logout /> : <Navigate to="/" />} />

          {/* Protected Routes (accessible after login) */}
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/product" element={isAuthenticated ? <Product /> : <Navigate to="/login" />} />
          <Route path="/addproduct" element={isAuthenticated ? <Addproduct /> : <Navigate to="/login" />} />
          <Route path="/deleteproduct" element={isAuthenticated ? <DeleteProduct /> : <Navigate to="/login" />} />
          <Route path="/purchaseform" element={isAuthenticated ? <Purchaseform /> : <Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
