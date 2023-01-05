import React, { createContext, ReactNode, useState } from 'react'

interface Coffee {
  type: string
  quantity: number
}

interface ICartContext {
  coffees: Coffee[]
  addCoffeeToCart: (type: string, quantity: number) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as ICartContext)

export const CartContextProvider: React.FC<CartContextProviderProps> = ({
  children,
}) => {
  const [coffees, setCoffees] = useState<Coffee[]>([])

  const addCoffeeToCart = (type: string, quantity: number) => {
    if (!quantity) {
      return
    }

    setCoffees((oldCoffees) => {
      const coffeeList: Coffee[] = [...oldCoffees, { type, quantity }]
      return coffeeList.reduce((reducedCoffees, coffee) => {
        const prevIndex = reducedCoffees.findIndex(
          (prevCoffee) => prevCoffee.type === coffee.type,
        )

        if (prevIndex < 0) {
          return [...reducedCoffees, coffee]
        } else {
          reducedCoffees[prevIndex] = {
            type: coffee.type,
            quantity: coffee.quantity + reducedCoffees[prevIndex].quantity,
          } as Coffee

          return reducedCoffees
        }
      }, [] as Coffee[])
    })
  }

  return (
    <CartContext.Provider value={{ coffees, addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  )
}
