import React, { createContext, ReactNode, useMemo } from 'react'

import ExpressoTradicional from '../../assets/Expresso.png'
import ExpressoAmericano from '../../assets/Americano.png'
import ExpressoCremoso from '../../assets/Expresso Cremoso.png'
import ExpressoGelado from '../../assets/Café Gelado.png'
import CafeComLeite from '../../assets/Café com Leite.png'
import Latte from '../../assets/Latte.png'
import Capuccino from '../../assets/Capuccino.png'
import Macchiato from '../../assets/Macchiato.png'
import Mochaccino from '../../assets/Mochaccino.png'
import ChocolateQuente from '../../assets/Chocolate Quente.png'
import Cubano from '../../assets/Cubano.png'
import Havaiano from '../../assets/Havaiano.png'
import Arabe from '../../assets/Árabe.png'
import Irlandes from '../../assets/Irlandês.png'

interface Coffee {
  type: string
  name: string
  image: string
  description: string
  tags: string[]
  cost: number
}

interface CoffeeListProviderProps {
  children: ReactNode
}

interface ICoffeeListContext {
  coffeeList: Coffee[]
}

export const CoffeeListContext = createContext({} as ICoffeeListContext)
export const CoffeeListProvider: React.FC<CoffeeListProviderProps> = ({
  children,
}) => {
  const coffeeList = useMemo<Coffee[]>(
    () => [
      {
        type: 'expresso-tradicional',
        name: 'Expresso Tradicional',
        image: ExpressoTradicional,
        description: 'O tradicional café feito com água quente e grãos moídos',
        tags: ['tradicional'],
        cost: 9.9,
      },
      {
        type: 'expresso-americano',
        name: 'Expresso Americano',
        image: ExpressoAmericano,
        description: 'Expresso diluído, menos intenso que o tradicional',
        tags: ['tradicional'],
        cost: 8.9,
      },
      {
        type: 'expresso-cremoso',
        name: 'Expresso Cremoso',
        image: ExpressoCremoso,
        description: 'Café expresso tradicional com espuma cremosa',
        tags: ['tradicional'],
        cost: 9.9,
      },
      {
        type: 'expresso-gelado',
        name: 'Expresso Gelado',
        image: ExpressoGelado,
        description: 'Bebida preparada com café expresso e cubos de gelo',
        tags: ['tradicional', 'gelado'],
        cost: 10.9,
      },
      {
        type: 'cafe-com-leite',
        name: 'Café com Leite',
        image: CafeComLeite,
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        tags: ['tradicional', 'com leite'],
        cost: 10.9,
      },
      {
        type: 'latte',
        name: 'Latte',
        image: Latte,
        description:
          'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        tags: ['tradicional', 'com leite'],
        cost: 9.9,
      },
      {
        type: 'capuccino',
        name: 'Capuccino',
        image: Capuccino,
        description:
          'Bebida com canela feita de doses iguais de café, leite e espuma',
        tags: ['tradicional', 'com leite'],
        cost: 11.9,
      },
      {
        type: 'macchiato',
        name: 'Macchiato',
        image: Macchiato,
        description:
          'Café expresso misturado com um pouco de leite quente e espuma',
        tags: ['tradicional', 'com leite'],
        cost: 11.9,
      },
      {
        type: 'mochaccino',
        name: 'Mochaccino',
        image: Mochaccino,
        description:
          'Café expresso com calda de chocolate, pouco leite e espuma',
        tags: ['tradicional', 'com leite'],
        cost: 11.9,
      },
      {
        type: 'chocolate-quente',
        name: 'Chocolate Quente',
        image: ChocolateQuente,
        description:
          'Bebida feita com chocolate dissolvido no leite quente e café',
        tags: ['especial', 'com leite'],
        cost: 12.9,
      },
      {
        type: 'cubano',
        name: 'Cubano',
        image: Cubano,
        description:
          'Drink gelado de café expresso com rum, creme de leite e hortelã',
        tags: ['especial', 'alcoólico', 'gelado'],
        cost: 12.9,
      },
      {
        type: 'havaiano',
        name: 'Havaiano',
        image: Havaiano,
        description: 'Bebida adocicada preparada com café e leite de coco',
        tags: ['especial'],
        cost: 12.9,
      },
      {
        type: 'arabe',
        name: 'Árabe',
        image: Arabe,
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        tags: ['especial'],
        cost: 12.9,
      },
      {
        type: 'irlandes',
        name: 'Irlandês',
        image: Irlandes,
        description:
          'Bebida a base de café, uísque irlandês, acúcar e chantilly',
        tags: ['especial', 'alcoólico'],
        cost: 12.9,
      },
    ],
    [],
  )

  return (
    <CoffeeListContext.Provider value={{ coffeeList }}>
      {children}
    </CoffeeListContext.Provider>
  )
}
