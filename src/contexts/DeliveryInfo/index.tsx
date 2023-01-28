import cep, { CEP } from 'cep-promise'
import React, { createContext, ReactNode, useCallback, useState } from 'react'

interface IDelivery {
  zipCode: string
  address: string
  number: string
  additionalInfo?: string
  neighborhood: string
  city: string
  uf: string
  paymentMethod: string
}

interface IDeliveryInformation {
  deliveryInfo?: IDelivery
  setDeliveryInfo: (deliveryInfo: IDelivery) => void
  handleUpdateDeliveryInfo: (deliveryInfo: IDelivery) => void
  searchForZipCode: (zipCode: string) => Promise<CEP>
}

interface DeliveryInfoProviderProps {
  children: ReactNode
}

export const DeliveryInfoContext = createContext({} as IDeliveryInformation)

export const DeliveryInfoContextProvider: React.FC<
  DeliveryInfoProviderProps
> = ({ children }) => {
  const [deliveryInfo, setDeliveryInfo] = useState<IDelivery>({
    zipCode: '',
    address: '',
    number: '',
    additionalInfo: '',
    neighborhood: '',
    city: '',
    uf: '',
    paymentMethod: '',
  })

  const handleUpdateDeliveryInfo = useCallback((deliveryInfo: IDelivery) => {
    setDeliveryInfo((oldState) => ({
      ...oldState,
      ...deliveryInfo,
    }))
  }, [])

  const searchForZipCode = useCallback(
    async (zipCode: string): Promise<CEP> => {
      if (!zipCode) {
        throw new Error('You must toss a zipCode to this function')
      }

      const zipCodeNumber = zipCode.replace(/\D/g, '')
      return await cep(zipCodeNumber)
    },
    [],
  )

  return (
    <DeliveryInfoContext.Provider
      value={{
        deliveryInfo,
        setDeliveryInfo,
        handleUpdateDeliveryInfo,
        searchForZipCode,
      }}
    >
      {children}
    </DeliveryInfoContext.Provider>
  )
}
