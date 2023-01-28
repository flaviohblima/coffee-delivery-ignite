import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import React, { useCallback, useContext, useEffect } from 'react'
import { useTheme } from 'styled-components'
import { PaymentRadioButton } from '../../components/PaymentRadioButton'
import { BaseInput } from './BaseInput'
import {
  CartForm,
  FieldGroup,
  PaymentMethodContainer,
  SummaryContainer,
} from './styles'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { CartContext } from '../../contexts/Cart'
import { CoffeeInCart } from './CoffeeInCart'
import { formatMoney } from '../../utils/formatMoney'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { DeliveryInfoContext } from '../../contexts/DeliveryInfo'

const newTransactionFormValidationSchema = zod.object({
  zipCode: zod.string(),
  address: zod.string(),
  number: zod.string(),
  additionalInfo: zod.string(),
  neighborhood: zod.string(),
  city: zod.string(),
  uf: zod.string(),
  paymentMethod: zod.string(),
})

export const Cart: React.FC = () => {
  const theme = useTheme()
  const { deliveryInfo, setDeliveryInfo, searchForZipCode } =
    useContext(DeliveryInfoContext)
  const navigate = useNavigate()
  const { coffees } = useContext(CartContext)

  const isThereACoffeeInTheCart = !!coffees.length
  const coffeeTotal = coffees.reduce((sum, coffee) => {
    return sum + coffee.quantity * coffee.cost
  }, 0)
  const deliveryCost = 3.5
  const totalPrice = coffeeTotal + deliveryCost

  const initalValues = {
    ...deliveryInfo,
  }

  const { register, handleSubmit, formState, watch, setValue } = useForm({
    resolver: zodResolver(newTransactionFormValidationSchema),
  })

  const handleCreateNewTransaction = (data: any) => {
    console.log('data', data)
    console.log('formState', formState)

    setDeliveryInfo(data)
    navigate('/delivery')
  }

  const zipCode = watch('zipCode')
  const handleAutoFillByZipCode = useCallback(async () => {
    if (!zipCode) {
      return
    }

    const data = await searchForZipCode(zipCode)
    setValue('address', data.street)
    setValue('neighborhood', data.neighborhood)
    setValue('city', data.city)
    setValue('uf', data.state)
    setValue('number', '')
  }, [zipCode, setValue, searchForZipCode])

  useEffect(() => {
    handleAutoFillByZipCode()
  }, [handleAutoFillByZipCode])

  return (
    <CartForm onSubmit={handleSubmit(handleCreateNewTransaction)} action="">
      <section>
        <h2>Complete seu pedido</h2>

        <div>
          <header>
            <MapPinLine size={22} color={theme['yellow-dark']} />
            <div>
              <h3>Endereço de entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>

          <BaseInput
            id="zipCode"
            type="text"
            placeholder="CEP"
            defaultValue={initalValues.zipCode}
            {...register('zipCode')}
          />
          <BaseInput
            id="address"
            type="text"
            placeholder="Rua"
            defaultValue={initalValues.address}
            {...register('address')}
            fullwidth
          />

          <FieldGroup>
            <BaseInput
              id="number"
              type="text"
              placeholder="Número"
              defaultValue={initalValues.number}
              {...register('number')}
            />
            <BaseInput
              id="additionalInfo"
              type="text"
              placeholder="Complemento"
              fullwidth
              flexgrow
              optional
              defaultValue={initalValues.additionalInfo}
              {...register('additionalInfo')}
            />
          </FieldGroup>

          <FieldGroup>
            <BaseInput
              id="neighborhood"
              type="text"
              placeholder="Bairro"
              flexgrow
              defaultValue={initalValues.neighborhood}
              {...register('neighborhood')}
            />
            <BaseInput
              id="city"
              type="text"
              placeholder="Cidade"
              flexgrow
              defaultValue={initalValues.city}
              {...register('city')}
            />
            <BaseInput
              id="uf"
              type="text"
              placeholder="UF"
              flexgrow
              defaultValue={initalValues.uf}
              {...register('uf')}
            />
          </FieldGroup>
        </div>

        <div>
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
              {...register('paymentMethod')}
              id="credit-card"
              icon={<CreditCard size={16} />}
              label="Cartão de crédito"
              value="Cartão de crédito"
            />
            <PaymentRadioButton
              {...register('paymentMethod')}
              id="debit-card"
              icon={<Bank size={16} />}
              label="Cartão de débito"
              value="Cartão de débito"
            />
            <PaymentRadioButton
              {...register('paymentMethod')}
              id="money"
              icon={<Money size={16} />}
              label="Dinheiro"
              value="Dinheiro"
            />
          </PaymentMethodContainer>
        </div>
      </section>

      <section>
        <h2>Cafés selecionados</h2>

        <SummaryContainer>
          <ul>
            {coffees.map((coffee) => (
              <CoffeeInCart key={coffee.type} {...coffee} />
            ))}
          </ul>

          <footer>
            <div>
              <p>Total de itens</p>
              <span>R$ {formatMoney(coffeeTotal)}</span>
            </div>
            <div>
              <p>Entrega</p>
              <span>R$ {formatMoney(deliveryCost)}</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ {formatMoney(totalPrice)}</strong>
            </div>

            <Button
              type="submit"
              disabled={!isThereACoffeeInTheCart}
              text={'Confirmar Pedido'}
            />
          </footer>
        </SummaryContainer>
      </section>
    </CartForm>
  )
}
