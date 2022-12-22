import React from 'react';
import { Button } from '../Button';
import { MenuCards } from './MenuCards';
import { MenuDescription } from './MenuDescription';
import { MenuTitle } from './MenuTitle';
import { Container } from './styles';
import { ImageBackground, Image } from 'react-native';
import  PFrango from '../../assets/images/pizza.png';
import  PFrangoTailandes from '../../assets/images/pizza2.png';

export const MenuComponent = () => {
    return (
        <Container>
            <MenuTitle>Menu Principal</MenuTitle>

            <MenuCards>
                <Image  source={PFrango}  resizeMode="cover" />
                <MenuTitle>Frango Tailandês </MenuTitle>
                <MenuDescription>R$35,00</MenuDescription>
            </MenuCards>
            <MenuCards>
                <Image  source={PFrangoTailandes}  resizeMode="cover" />
                <MenuTitle>Massa Tailandêsa</MenuTitle>
                <MenuDescription>R$44,99</MenuDescription>
            </MenuCards>
            <MenuCards>
                <Image  source={PFrangoTailandes}  resizeMode="cover" />
                <MenuTitle>Salada de Frutas</MenuTitle>
                <MenuDescription>R$44,99</MenuDescription>
            </MenuCards>

            <MenuCards>
                <Image  source={PFrango}  resizeMode="cover" />
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
