import React from 'react';
import { Button } from '../Button';
import { MenuCards } from './MenuCards';
import { MenuDescription } from './MenuDescription';
import { MenuTitle } from './MenuTitle';
import { Container } from './styles';

export const MenuComponent = () => {
    return (
        <Container>
            <MenuTitle>Menu Principal</MenuTitle>

            <MenuCards>
                <img src="/images/pizza.png" alt="Frango Tailandês" />
                <MenuTitle>Frango Tailandês </MenuTitle>
                <MenuDescription>R$35,00</MenuDescription>
            </MenuCards>
            <MenuCards>
                <img src="/images/pizza2.png" alt="Massa tailandêsa" />
                <MenuTitle>Massa Tailandêsa</MenuTitle>
                <MenuDescription>R$44,99</MenuDescription>
            </MenuCards>
            <MenuCards>
                <img src="/images/pizza2.png" alt="Massa tailandêsa" />
                <MenuTitle>Salada de Frutas</MenuTitle>
                <MenuDescription>R$44,99</MenuDescription>
            </MenuCards>

            <MenuCards>
                <img src="/images/pizza.png" alt="Frango Tailandês" />
                <MenuTitle>Frango Tailandês </MenuTitle>
                <MenuDescription>R$35,00</MenuDescription>
            </MenuCards>
           
            <Button>
                Veja mais receitas
            </Button>
        </Container>
    )
}

export default MenuComponent;
