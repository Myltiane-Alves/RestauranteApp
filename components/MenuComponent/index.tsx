import React, { useRef, useState } from 'react';
import {StyleSheet} from 'react-native';
import { Button } from '../Button';
import { MenuCards } from './MenuCards';
import { MenuDescription } from './MenuDescription';
import { MenuTitle } from './MenuTitle';
import { FlatList, View } from 'react-native';
import  PFrango from '../../assets/images/pizza.png';
import  PFrangoTailandes from '../../assets/images/pizza2.png';
import { MenuImage } from './MenuImage';
import { MenuWrap } from './MenuWrap';
import { vars } from '../../values';
import { Title } from './Title';
import carrouselItem from './carrouselItem.json';
import { TouchableOpacity } from 'react-native-gesture-handler';
const viewConfigRef = { ViewAreaCoveragePercentThreshold: 95}

interface CarrouselItems {
    title: string;
    url: string;
    price: string;
}

export const MenuComponent = () => {
  
        return (
          <MenuWrap>
                    <MenuTitle>Menu Principal</MenuTitle>
        
                    <MenuCards>
                        <MenuImage  source={PFrango} />
                        <Title> Frango Tailandês</Title>
                        <MenuDescription> R$35,00 </MenuDescription>
                    </MenuCards>
                    <MenuCards>
                        <MenuImage  source={PFrangoTailandes}   />
                        <Title>Massa Tailandêsa</Title>
                        <MenuDescription>R$44,99</MenuDescription>
                    </MenuCards>
                    {/* <MenuCards>
                        <MenuImage  source={PFrangoTailandes}  resizeMode="cover" />
                        <MenuTitle>Salada de Frutas</MenuTitle>
                        <MenuDescription>R$44,99</MenuDescription>
                    </MenuCards>
        
                    <MenuCards>
                        <MenuImage  source={PFrango}  resizeMode="cover" />
                        <MenuTitle>Frango Tailandês </MenuTitle>
                        <MenuDescription>R$35,00</MenuDescription>
                    </MenuCards> */}
                
                    <Button style={{ marginTop: vars.space }} color="blue">
                        Veja mais receitas
                    </Button>
                </MenuWrap>

           
        );
    }

 


export default MenuComponent;