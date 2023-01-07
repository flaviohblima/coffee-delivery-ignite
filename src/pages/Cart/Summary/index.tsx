import React, { useContext } from 'react'
import { Button } from '../../../components/Button'
import { CartContext } from '../../../contexts/Cart'
import { CoffeeInCart } from '../CoffeeInCart'
import { SummaryContainer } from './styles'

export const Summary: React.FC = () => {
  const { coffees } = useContext(CartContext)
  return (
    <SummaryContainer>
      <ul>
        {coffees.map((coffee) => (
          <CoffeeInCart key={coffee.type} {...coffee} />
        ))}
      </ul>

      <footer>
        <div>
          <p>Total de itens</p>
          <span>R$ {29}</span>
        </div>
        <div>
          <p>Entrega</p>
          <span>R$ {3.5}</span>
        </div>
        <div>
          <strong>Total</strong>
          <strong>R$ {32.5}</strong>
        </div>

        <Button label={'Confirmar Pedido'} />
      </footer>
    </SummaryContainer>
  )
}
