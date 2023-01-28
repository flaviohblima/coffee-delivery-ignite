import { MagnifyingGlass, MapPin, ShoppingCart } from 'phosphor-react'
import React, { useCallback, useContext, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

import logoSVG from '../../assets/Logo.svg'
import { IconButton } from '../../components/IconButton'
import { NumberIndicator } from '../../components/NumberIndicator'
import { CartContext } from '../../contexts/Cart'
import { DeliveryInfoContext } from '../../contexts/DeliveryInfo'
import { BaseInput } from '../../pages/Cart/BaseInput'
import { HeaderContainer } from './styles'

export const Header: React.FC = () => {
  const { coffees } = useContext(CartContext)
  const [isSearchingCity, setIsSearchingCity] = useState(false)
  const { deliveryInfo, handleUpdateDeliveryInfo, searchForZipCode } =
    useContext(DeliveryInfoContext)

  const zipCodeInputRef = useRef<HTMLInputElement>(null)

  const cityAndUf =
    deliveryInfo?.city && deliveryInfo?.uf
      ? `${deliveryInfo?.city}, ${deliveryInfo?.uf}`
      : ''

  const numberOfItensInCart = coffees.reduce(
    (sum, coffee) => sum + coffee.quantity,
    0,
  )

  const handleZipCodeSearch = useCallback(async () => {
    if (!zipCodeInputRef?.current?.value) {
      return
    }

    try {
      const data = await searchForZipCode(zipCodeInputRef.current.value)

      handleUpdateDeliveryInfo({
        address: data.street,
        neighborhood: data.neighborhood,
        city: data.city,
        uf: data.state,
        number: '',
        additionalInfo: '',
        paymentMethod: '',
        zipCode: zipCodeInputRef.current.value,
      })
    } catch (error) {
      console.error(error)
    } finally {
      setIsSearchingCity(false)
    }
  }, [handleUpdateDeliveryInfo, zipCodeInputRef, searchForZipCode])

  const handleToogleSearchingCity = useCallback(() => {
    setIsSearchingCity((oldState) => !oldState)
  }, [])

  return (
    <HeaderContainer>
      <NavLink to="/" id="home-navlink">
        <img src={logoSVG} alt="" />
      </NavLink>

      <nav>
        {isSearchingCity ? (
          <>
            <BaseInput
              id="zipCode"
              type="text"
              placeholder="CEP (00000-000)"
              defaultValue={deliveryInfo?.zipCode || ''}
              ref={zipCodeInputRef}
              maxLength={9}
            />
            <IconButton
              variant="secondary-light"
              icon={<MagnifyingGlass size={24} />}
              text={'Procurar'}
              onClick={handleZipCodeSearch}
            />
          </>
        ) : (
          <IconButton
            variant="secondary-light"
            icon={<MapPin size={24} weight="fill" />}
            text={cityAndUf || 'Use seu CEP para calcular o frete'}
            onClick={handleToogleSearchingCity}
          />
        )}

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
