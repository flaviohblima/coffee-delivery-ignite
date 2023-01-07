import { Trash } from 'phosphor-react'
import React from 'react'
import { CoffeeCounter } from '../../../components/CoffeeCounter'
import { IconButton } from '../../../components/IconButton'
import { CoffeeActions, CoffeeInCartContainer } from './styles'

interface CoffeeInCartProps {
  name: string
  image: string
  cost: number
  quantity: number
}

export const CoffeeInCart: React.FC<CoffeeInCartProps> = ({
  name,
  image,
  cost,
  quantity,
}) => {
  // const { addCoffeeToCart } = useContext(CartContext)

  return (
    <CoffeeInCartContainer>
      <div>
        <img src={image} alt="" />

        <div>
          <p>{name}</p>

          <CoffeeActions>
            <CoffeeCounter
              size="small"
              onSubtract={() => {
                // do nithin
              }}
              onSum={() => {
                // do nithin
              }}
              value={quantity}
            />

            <IconButton
              size="small"
              icon={<Trash size={16} />}
              text="REMOVER"
            />
          </CoffeeActions>
        </div>

        <strong>R$ {cost}</strong>
      </div>

      <hr />
    </CoffeeInCartContainer>
  )
}
