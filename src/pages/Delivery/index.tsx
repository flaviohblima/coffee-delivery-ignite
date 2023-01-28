import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import React, { useContext, useEffect } from 'react'
import { DeliveryInfoContext } from '../../contexts/DeliveryInfo'
import { CircularListIcon, DeliveryContainer } from './styles'

import DeliveryMan from '../../assets/delivery-man.svg'
import { useNavigate } from 'react-router-dom'

export const Delivery: React.FC = () => {
  const { deliveryInfo } = useContext(DeliveryInfoContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!deliveryInfo) {
      navigate('/')
    }
  }, [deliveryInfo, navigate])

  return (
    <DeliveryContainer>
      <header>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </header>

      <section>
        <div>
          <ul>
            <li>
              <CircularListIcon iconColor="primary">
                <MapPin size={16} weight="fill" />
              </CircularListIcon>
              <div>
                <p>
                  Entrega em{' '}
                  <strong>{`${deliveryInfo?.address}, ${deliveryInfo?.number}`}</strong>
                </p>
                <p>{`${deliveryInfo?.city}, ${deliveryInfo?.uf}`}</p>
              </div>
            </li>
            <li>
              <CircularListIcon iconColor="secondary">
                <Timer size={16} weight="fill" />
              </CircularListIcon>
              <div>
                <p>Previsão de Entrega</p>
                <p>
                  <strong>20 min - 30 min</strong>
                </p>
              </div>
            </li>
            <li>
              <CircularListIcon iconColor="tertiary">
                <CurrencyDollar size={16} weight="fill" />
              </CircularListIcon>
              <div>
                <p>Pagamento na entrega</p>
                <p>
                  <strong>{deliveryInfo?.paymentMethod}</strong>
                </p>
              </div>
            </li>
          </ul>
        </div>

        <img src={DeliveryMan} alt="" />
      </section>
    </DeliveryContainer>
  )
}
