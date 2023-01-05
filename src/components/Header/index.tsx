import { MapPin, ShoppingCart } from 'phosphor-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

import logoSVG from '../../assets/Logo.svg'
import { IconButton } from '../IconButton'
import { NumberIndicator } from '../NumberIndicator'
import { HeaderContainer } from './styles'

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <NavLink to="/" id="home-navlink">
        <img src={logoSVG} alt="" />
      </NavLink>

      <nav>
        <IconButton
          variant="secondary"
          icon={<MapPin size={24} weight="fill" />}
          text={'São Paulo, SP'}
        />

        <NavLink to="/cart" id="cart-navlink">
          <NumberIndicator number={3} variant="primary">
            <IconButton
              variant="primary"
              icon={<ShoppingCart size={24} weight="fill" />}
            />
          </NumberIndicator>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
