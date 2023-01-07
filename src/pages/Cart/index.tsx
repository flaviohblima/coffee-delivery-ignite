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
import { BaseInput } from './BaseInput'
import { CartContainer, FieldGroup, PaymentMethodContainer } from './styles'
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

          <BaseInput id="cep" name="cep" type="text" placeholder="CEP" />
          <BaseInput
            id="rua"
            name="rua"
            type="text"
            placeholder="Rua"
            fullwidth
          />

          <FieldGroup>
            <BaseInput
              id="numero"
              name="numero"
              type="text"
              placeholder="Número"
            />
            <BaseInput
              id="complemento"
              name="complemento"
              type="text"
              placeholder="Complemento"
              fullwidth
              flexgrow
              optional
            />
          </FieldGroup>

          <FieldGroup>
            <BaseInput
              id="bairro"
              name="bairro"
              type="text"
              placeholder="Bairro"
              flexgrow
            />
            <BaseInput
              id="cidade"
              name="cidade"
              type="text"
              placeholder="Cidade"
              flexgrow
            />
            <BaseInput
              id="uf"
              name="uf"
              type="text"
              placeholder="UF"
              flexgrow
            />
          </FieldGroup>
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

          <PaymentMethodContainer>
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
          </PaymentMethodContainer>
        </form>
      </section>

      <section>
        <h2>Cafés selecionados</h2>

        <Summary />
      </section>
    </CartContainer>
  )
}
