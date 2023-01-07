import { ShoppingCart } from 'phosphor-react'
import React, { useContext, useState } from 'react'
import { CoffeeCounter } from '../../../components/CoffeeCounter'
import { IconButton } from '../../../components/IconButton'
import { CartContext } from '../../../contexts/Cart'
import { CoffeeCardContainer } from './styles'

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
            {tag.toUpperCase()}
          </li>
        ))}
      </ul>

      <strong>{name}</strong>

      <p>{description}</p>

      <div>
        <span>
          R$
          <strong>{cost}</strong>
        </span>

        <div>
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
        </div>
      </div>
    </CoffeeCardContainer>
  )
}
