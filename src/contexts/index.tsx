import React, { ReactNode } from 'react'
import { CartContextProvider } from './Cart'
import { CoffeeListProvider } from './CoffeeList'

interface AppProvidersProps {
  children: ReactNode
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <CartContextProvider>
      <CoffeeListProvider>{children}</CoffeeListProvider>
    </CartContextProvider>
  )
}
