import React, { ReactNode } from 'react'
import { CoffeeListProvider } from './CoffeeList'

interface AppProvidersProps {
  children: ReactNode
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return <CoffeeListProvider>{children}</CoffeeListProvider>
}
