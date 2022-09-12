import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ShoppingCart from '../pages/ShoppingCart';
import Shops from '../pages/Shop';

export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Shops />} />
      <Route exact path="/shopping-cart" element={<ShoppingCart />} />
    </Routes>
  );
}
