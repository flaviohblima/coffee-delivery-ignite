import React from 'react'
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
          <div>add</div>
          <div>cart</div>
        </div>
      </div>
    </CoffeeCardContainer>
  )
}
