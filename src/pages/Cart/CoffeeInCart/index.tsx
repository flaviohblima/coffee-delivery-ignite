import { Trash } from 'phosphor-react'
import React, { useContext } from 'react'
import { CoffeeCounter } from '../../../components/CoffeeCounter'
import { IconButton } from '../../../components/IconButton'
import { CartContext } from '../../../contexts/Cart'
import { formatMoney } from '../../../utils/formatMoney'
import { CoffeeActions, CoffeeInCartContainer } from './styles'

interface CoffeeInCartProps {
  type: string
  name: string
  image: string
  cost: number
  quantity: number
}

export const CoffeeInCart: React.FC<CoffeeInCartProps> = ({
  type,
  name,
  image,
  cost,
  quantity,
}) => {
  const { sumOneCoffee, subtractOneCoffee, removeCoffeeFromCart } =
    useContext(CartContext)

  const handleSumOneCoffee = () => {
    sumOneCoffee({ type, name, image, cost, quantity })
  }
  const handleSubtractOneCoffee = () => {
    subtractOneCoffee({ type, name, image, cost, quantity })
  }

  const handleRemoveCoffeeFromCart = () => {
    removeCoffeeFromCart({ type, name, image, cost, quantity })
  }

  return (
    <CoffeeInCartContainer>
      <div>
        <img src={image} alt="" />

        <div>
          <p>{name}</p>

          <CoffeeActions>
            <CoffeeCounter
              size="small"
              onSubtract={handleSubtractOneCoffee}
              onSum={handleSumOneCoffee}
              value={quantity}
            />

            <IconButton
              size="small"
              icon={<Trash size={16} />}
              text="REMOVER"
              onClick={handleRemoveCoffeeFromCart}
            />
          </CoffeeActions>
        </div>

        <strong>R$ {formatMoney(cost * quantity)}</strong>
      </div>

      <hr />
    </CoffeeInCartContainer>
  )
}
