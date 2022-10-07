import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/header";
import HomePage from './components/homePage';
import Products from './components/products';
import AddProduct from './components/addProduct';
import Product from './components/product';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='container my-4'>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path='/home' exact element={<HomePage />} />
          <Route path='/products' exact element={<Products />} />
          <Route path='/add-product' exact element={<AddProduct />} />
          <Route path='/product/:id' exact element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
