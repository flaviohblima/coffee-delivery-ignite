import { MapPin, ShoppingCart } from 'phosphor-react'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import logoSVG from '../../assets/Logo.svg'
import { CartContext } from '../../contexts/Cart'
import { IconButton } from '../../components/IconButton'
import { NumberIndicator } from '../../components/NumberIndicator'
import { HeaderContainer } from './styles'

export const Header: React.FC = () => {
  const { coffees } = useContext(CartContext)

  const numberOfItensInCart = coffees.reduce(
    (sum, coffee) => sum + coffee.quantity,
    0,
  )

  return (
    <HeaderContainer>
      <NavLink to="/" id="home-navlink">
        <img src={logoSVG} alt="" />
      </NavLink>

      <nav>
        <IconButton
          variant="secondary-light"
          icon={<MapPin size={24} weight="fill" />}
          text={'São Paulo, SP'}
        />

        <NavLink to="/cart" id="cart-navlink">
          <NumberIndicator number={numberOfItensInCart} variant="primary">
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
