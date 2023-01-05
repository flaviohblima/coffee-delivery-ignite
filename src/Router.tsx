import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Cart } from './pages/Cart'
import { ProductsList } from './pages/ProductsList'

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<ProductsList />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  )
}
