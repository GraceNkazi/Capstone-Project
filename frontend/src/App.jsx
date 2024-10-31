//import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
//import { BrowserRouter } from 'react-router-dom'
import Products from "./pages/ProductsList";
import ProductDetails from './pages/ProductDetails';
import AddProductsList from './pages/AddProduct';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
     
    <Navbar />
        <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="/addProduct" element={<AddProductsList />} />
        <Route path="/products/:productId" element={<ProductDetails/>} />
        </Routes>
    </>
  );
}

export default App;