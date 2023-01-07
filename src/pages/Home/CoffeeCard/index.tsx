import { ShoppingCart } from 'phosphor-react'
import React, { useContext, useState } from 'react'
import { CoffeeCounter } from '../../../components/CoffeeCounter'
import { IconButton } from '../../../components/IconButton'
import { CartContext } from '../../../contexts/Cart'
import { formatMoney } from '../../../utils/formatMoney'
import {
  ActionsContainer,
  CoffeeCardContainer,
  CoffeeDescription,
  CoffeeName,
  PriceContainer,
} from './styles'

interface CoffeeCardProps {
  type: string
  name: string
  image: string
  description: string
  tags: string[]
  cost: number
}

export const CoffeeCard: React.FC<CoffeeCardProps> = ({
  type,
  cost,
  description,
  image,
  name,
  tags,
}) => {
  const { addCoffeeToCart } = useContext(CartContext)

  const [quantity, setQuantity] = useState(0)

  const handleAddCoffeeToCard = () => {
    addCoffeeToCart({ type, cost, image, name, quantity })
    setQuantity(0)
  }

  const handleSubtractOneCoffee = () => {
    setQuantity((oldQuantity) => (oldQuantity ? oldQuantity - 1 : 0))
  }
  const handleSumOneCoffee = () => {
    setQuantity((oldQuantity) => oldQuantity + 1)
  }
  return (
    <CoffeeCardContainer>
      <img src={image} alt="" />
      <ul>
        {tags.map((tag) => (
          <li id={tag} key={tag}>
            <p>{tag.toUpperCase()}</p>
          </li>
        ))}
      </ul>

      <CoffeeName>{name}</CoffeeName>

      <CoffeeDescription>{description}</CoffeeDescription>

      <footer>
        <PriceContainer>
          <span>R$</span>
          <strong>{formatMoney(cost)}</strong>
        </PriceContainer>

        <ActionsContainer>
          <CoffeeCounter
            onSubtract={handleSubtractOneCoffee}
            onSum={handleSumOneCoffee}
            value={quantity}
          />
          <IconButton
            variant="secondary"
            icon={<ShoppingCart size={22} weight="fill" />}
            onClick={handleAddCoffeeToCard}
          />
        </ActionsContainer>
      </footer>
    </CoffeeCardContainer>
  )
}
