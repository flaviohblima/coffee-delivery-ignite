import React, { ReactNode } from 'react'
import { CartContextProvider } from './Cart'
import { CoffeeListProvider } from './CoffeeList'
import { DeliveryInfoContextProvider } from './DeliveryInfo'

interface AppProvidersProps {
  children: ReactNode
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <CartContextProvider>
      <CoffeeListProvider>
        <DeliveryInfoContextProvider>{children}</DeliveryInfoContextProvider>
      </CoffeeListProvider>
    </CartContextProvider>
  )
}
