import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import React from 'react'
import { useTheme } from 'styled-components'
import { PaymentRadioButton } from '../../components/PaymentRadioButton'
import { CartContainer } from './styles'
import { Summary } from './Summary'

export const Cart: React.FC = () => {
  const theme = useTheme()
  return (
    <CartContainer>
      <section>
        <h2>Complete seu pedido</h2>

        <form>
          <header>
            <MapPinLine size={22} color={theme['yellow-dark']} />
            <div>
              <h3>Endereço de entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>

          <input type="text" placeholder="CEP" />
          <input type="text" placeholder="Rua" />
          <fieldset>
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
          </fieldset>

          <fieldset>
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </fieldset>
        </form>

        <form>
          <header>
            <CurrencyDollar size={22} color={theme.purple} />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </header>

          <ul>
            <PaymentRadioButton
              name="payment-method"
              id="credit-card"
              icon={<CreditCard size={22} />}
              label="Cartão de crédito"
            />
            <PaymentRadioButton
              name="payment-method"
              id="debit-card"
              icon={<Bank size={22} />}
              label="Cartão de débito"
            />
            <PaymentRadioButton
              name="payment-method"
              id="money"
              icon={<Money size={22} />}
              label="Dinheiro"
            />
          </ul>
        </form>
      </section>

      <section>
        <h2>Cafés selecionados</h2>

        <Summary />
      </section>
    </CartContainer>
  )
}
