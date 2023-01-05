import React from 'react'
import { ProductsPageContainer, SynopsisSection } from './styles'

import BackgroundSVG from '../../assets/Background.svg'
import HomeImage from '../../assets/HomeImage.png'
import { IconTextListItem } from '../../components/HomeListItem'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export const ProductsList: React.FC = () => {
  return (
    <ProductsPageContainer>
      <img src={BackgroundSVG} alt="" />
      <SynopsisSection>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>

          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora.
          </p>

          <ul>
            <IconTextListItem
              icon={
                <ShoppingCart
                  size={16}
                  alt="ícone de carrinho de compras"
                  weight="fill"
                />
              }
              text={'Compra simples e segura'}
            />
            <IconTextListItem
              variant="default"
              icon={
                <Package
                  size={16}
                  alt="ícone de caixa de papelão"
                  weight="fill"
                />
              }
              text={'Embalagem mantém o café intacto'}
            />
            <IconTextListItem
              variant="tertiary"
              icon={<Timer size={16} alt="ícone de relógio" weight="fill" />}
              text={'Entrega rápida e rastreada'}
            />
            <IconTextListItem
              variant="secondary"
              icon={
                <Coffee size={16} alt="ícone xícara de café" weight="fill" />
              }
              text={'O café chega fresquinho até você'}
            />
          </ul>
        </div>

        <img
          src={HomeImage}
          alt="Imagem de copo térmico de café com logo do Coffee Delivery, com grãos e pó de café ao fundo."
        />
      </SynopsisSection>

      <section>
        <h2>Nossos Cafés</h2>
        <ul>
          <li>
            <div>Espresso Tradicional</div>
          </li>
          <li>
            <div>Espresso Tradicional</div>
          </li>
          <li>
            <div>Espresso Tradicional</div>
          </li>
          <li>
            <div>Espresso Tradicional</div>
          </li>
          <li>
            <div>Espresso Tradicional</div>
          </li>
          <li>
            <div>Espresso Tradicional</div>
          </li>
          <li>
            <div>Espresso Tradicional</div>
          </li>
          <li>
            <div>Espresso Tradicional</div>
          </li>
          <li>
            <div>Espresso Tradicional</div>
          </li>
          <li>
            <div>Espresso Tradicional</div>
          </li>
          <li>
            <div>Espresso Tradicional</div>
          </li>
          <li>
            <div>Espresso Tradicional</div>
          </li>
          <li>
            <div>Espresso Tradicional</div>
          </li>
          <li>
            <div>Espresso Tradicional</div>
          </li>
          <li>
            <div>Espresso Tradicional</div>
          </li>
          <li>
            <div>Espresso Tradicional</div>
          </li>
          <li>
            <div>Espresso Tradicional</div>
          </li>
          <li>
            <div>Espresso Tradicional</div>
          </li>
          <li>
            <div>Espresso Tradicional</div>
          </li>
          <li>
            <div>Espresso Tradicional</div>
          </li>
          <li>
            <div>Espresso Tradicional</div>
          </li>
          <li>
            <div>Espresso Tradicional</div>
          </li>
          <li>
            <div>Espresso Tradicional</div>
          </li>
          <li>
            <div>Espresso Tradicional</div>
          </li>
          <li>
            <div>Espresso Tradicional</div>
          </li>
          <li>
            <div>Espresso Tradicional</div>
          </li>
          <li>
            <div>Espresso Tradicional</div>
          </li>
          <li>
            <div>Espresso Tradicional</div>
          </li>
        </ul>
      </section>
    </ProductsPageContainer>
  )
}
