import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'

interface Coffee {
  type: string
  name: string
  image: string
  cost: number
  quantity: number
}

interface ICartContext {
  coffees: Coffee[]
  addCoffeeToCart: (coffee: Coffee) => void
  sumOneCoffee: (coffee: Coffee) => void
  subtractOneCoffee: (coffee: Coffee) => void
  removeCoffeeFromCart: (coffee: Coffee) => void
  resetCoffees: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as ICartContext)

export const CartContextProvider: React.FC<CartContextProviderProps> = ({
  children,
}) => {
  const [coffees, setCoffees] = useState<Coffee[]>(() => {
    const coffeesStoredAsJSON = localStorage.getItem(
      '@coffee-delivery-ignite:coffees-state-1.0.0',
    )

    if (coffeesStoredAsJSON) {
      return JSON.parse(coffeesStoredAsJSON)
    } else {
      return []
    }
  })

  useEffect(() => {
    const coffeesJson = JSON.stringify(coffees)

    localStorage.setItem(
      '@coffee-delivery-ignite:coffees-state-1.0.0',
      coffeesJson,
    )
  }, [coffees])

  const addCoffeeToCart = (coffee: Coffee) => {
    if (!coffee.quantity) {
      return
    }

    setCoffees((oldCoffees) => {
      const coffeeList: Coffee[] = [...oldCoffees, coffee]
      return coffeeList.reduce((reducedCoffees, coffee) => {
        const prevIndex = reducedCoffees.findIndex(
          (prevCoffee) => prevCoffee.type === coffee.type,
        )

        if (prevIndex < 0) {
          return [...reducedCoffees, coffee]
        } else {
          reducedCoffees[prevIndex] = {
            ...reducedCoffees[prevIndex],
            quantity: coffee.quantity + reducedCoffees[prevIndex].quantity,
          } as Coffee

          return reducedCoffees
        }
      }, [] as Coffee[])
    })
  }

  const sumOneCoffee = (coffee: Coffee) => {
    setCoffees((oldCoffees) => {
      return oldCoffees.map((oldCoffee) => {
        if (oldCoffee.type === coffee.type) {
          coffee.quantity = oldCoffee.quantity + 1
          return coffee
        }
        return oldCoffee
      })
    })
  }

  const subtractOneCoffee = (coffee: Coffee) => {
    setCoffees((oldCoffees) => {
      return oldCoffees.map((oldCoffee) => {
        if (oldCoffee.type === coffee.type && oldCoffee.quantity > 0) {
          coffee.quantity = oldCoffee.quantity - 1
          return coffee
        }
        return oldCoffee
      })
    })
  }

  const removeCoffeeFromCart = (coffee: Coffee) => {
    setCoffees((oldCoffees) => {
      return oldCoffees.filter((oldCoffee) => oldCoffee.type !== coffee.type)
    })
  }

  const resetCoffees = useCallback(() => {
    setCoffees([])
  }, [])

  return (
    <CartContext.Provider
      value={{
        coffees,
        addCoffeeToCart,
        sumOneCoffee,
        subtractOneCoffee,
        removeCoffeeFromCart,
        resetCoffees,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
