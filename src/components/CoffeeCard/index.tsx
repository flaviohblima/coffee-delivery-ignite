import { ShoppingCart } from 'phosphor-react'
import React from 'react'
import { IconButton } from '../IconButton'
import { CoffeeCardContainer, CountContainer } from './styles'

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
          <CountContainer>
            <button>-</button>
            <p>{0}</p>
            <button>+</button>
          </CountContainer>
          <IconButton
            variant="secondary"
            icon={<ShoppingCart size={22} weight="fill" />}
          />
        </div>
      </div>
    </CoffeeCardContainer>
  )
}
