import React, { createContext, ReactNode, useState } from 'react'

interface IDelivery {
  zipCode: string
  address: string
  number: string
  additionalInfo: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: string
}

interface IDeliveryInformation {
  deliveryInfo?: IDelivery
  setDeliveryInfo: (deliveryInfo: IDelivery) => void
}

interface DeliveryInfoProviderProps {
  children: ReactNode
}

export const DeliveryInfoContext = createContext({} as IDeliveryInformation)

export const DeliveryInfoContextProvider: React.FC<
  DeliveryInfoProviderProps
> = ({ children }) => {
  const [deliveryInfo, setDeliveryInfo] = useState<IDelivery>()

  return (
    <DeliveryInfoContext.Provider
      value={{
        deliveryInfo,
        setDeliveryInfo,
      }}
    >
      {children}
    </DeliveryInfoContext.Provider>
  )
}
