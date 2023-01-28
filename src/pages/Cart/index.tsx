import { zodResolver } from '@hookform/resolvers/zod'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import React, { useCallback, useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'
import * as zod from 'zod'
import { Button } from '../../components/Button'
import { PaymentRadioButton } from '../../components/PaymentRadioButton'
import { CartContext } from '../../contexts/Cart'
import { DeliveryInfoContext } from '../../contexts/DeliveryInfo'
import { formatMoney } from '../../utils/formatMoney'
import { BaseInput } from './BaseInput'
import { CoffeeInCart } from './CoffeeInCart'
import {
  CartForm,
  FieldGroup,
  PaymentMethodContainer,
  SummaryContainer,
} from './styles'

const newTransactionFormValidationSchema = zod.object({
  zipCode: zod.string().min(1, 'Obrigatório'),
  address: zod.string().min(1, 'Obrigatório'),
  number: zod.string().min(1, 'Obrigatório'),
  additionalInfo: zod.string().optional(),
  neighborhood: zod.string().min(1, 'Obrigatório'),
  city: zod.string().min(1, 'Obrigatório'),
  uf: zod.string().min(1, 'Obrigatório'),
  paymentMethod: zod.string().min(1, 'Obrigatório'),
})

export const Cart: React.FC = () => {
  const theme = useTheme()
  const { deliveryInfo, setDeliveryInfo, searchForZipCode } =
    useContext(DeliveryInfoContext)
  const navigate = useNavigate()
  const { coffees, resetCoffees } = useContext(CartContext)

  const isThereACoffeeInTheCart = !!coffees.length
  const coffeeTotal = coffees.reduce((sum, coffee) => {
    return sum + coffee.quantity * coffee.cost
  }, 0)
  const deliveryCost = 3.5
  const totalPrice = coffeeTotal + deliveryCost

  type ValidationSchema = zod.infer<typeof newTransactionFormValidationSchema>
  const { register, handleSubmit, watch, setValue } = useForm<ValidationSchema>(
    {
      resolver: zodResolver(newTransactionFormValidationSchema),
      defaultValues: { ...deliveryInfo },
    },
  )

  const handleCreateNewPurchase = useCallback(
    (data: ValidationSchema) => {
      setDeliveryInfo(data)
      resetCoffees()
      navigate('/delivery')
    },
    [navigate, setDeliveryInfo, resetCoffees],
  )

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
    <CartForm onSubmit={handleSubmit(handleCreateNewPurchase)} action="">
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
            {...register('zipCode')}
          />
          <BaseInput
            id="address"
            type="text"
            placeholder="Rua"
            {...register('address')}
            fullwidth
          />

          <FieldGroup>
            <BaseInput
              id="number"
              type="text"
              placeholder="Número"
              {...register('number')}
            />
            <BaseInput
              id="additionalInfo"
              type="text"
              placeholder="Complemento"
              fullwidth
              flexgrow
              optional
              {...register('additionalInfo')}
            />
          </FieldGroup>

          <FieldGroup>
            <BaseInput
              id="neighborhood"
              type="text"
              placeholder="Bairro"
              flexgrow
              {...register('neighborhood')}
            />
            <BaseInput
              id="city"
              type="text"
              placeholder="Cidade"
              flexgrow
              {...register('city')}
            />
            <BaseInput
              id="uf"
              type="text"
              placeholder="UF"
              flexgrow
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
            {coffees.length ? (
              coffees.map((coffee) => (
                <CoffeeInCart key={coffee.type} {...coffee} />
              ))
            ) : (
              <>
                <p>Nenhum café foi selecionado</p>
                <hr />
              </>
            )}
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
