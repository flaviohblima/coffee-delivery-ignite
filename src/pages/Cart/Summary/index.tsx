import React, { useContext } from 'react'
import { Button } from '../../../components/Button'
import { CartContext } from '../../../contexts/Cart'
import { CoffeeInCart } from '../CoffeeInCart'
import { SummaryContainer } from './styles'

export const Summary: React.FC = () => {
  const { coffees } = useContext(CartContext)

  const coffeeTotal = coffees.reduce((sum, coffee) => {
    return sum + coffee.quantity * coffee.cost
  }, 0)

  const deliveryCost = 3.5

  const totalPrice = coffeeTotal + deliveryCost

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
          <span>R$ {coffeeTotal}</span>
        </div>
        <div>
          <p>Entrega</p>
          <span>R$ {deliveryCost}</span>
        </div>
        <div>
          <strong>Total</strong>
          <strong>R$ {totalPrice}</strong>
        </div>

        <Button label={'Confirmar Pedido'} />
      </footer>
    </SummaryContainer>
  )
}
