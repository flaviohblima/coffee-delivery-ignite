import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header'
import { DefaultLayoutContainer } from './styles'

export const DefaultLayout: React.FC = () => {
  return (
    <DefaultLayoutContainer>
      <Header />
      <Outlet />
    </DefaultLayoutContainer>
  )
}
