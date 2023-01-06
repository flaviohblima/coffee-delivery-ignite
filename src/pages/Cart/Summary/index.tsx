import React from 'react'
import { Button } from '../../../components/Button'
import { SummaryContainer } from './styles'

export const Summary: React.FC = () => {
  return (
    <SummaryContainer>
      <ul>
        <>
          <li>
            <img src="" alt="" />
            <p>café 1</p>
          </li>
          <hr />
        </>
        <>
          <li>
            <img src="" alt="" />
            <p>café 2</p>
          </li>
          <hr />
        </>
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
