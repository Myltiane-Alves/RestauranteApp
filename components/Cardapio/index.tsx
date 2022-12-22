import React from 'react';
import { Image, Text } from 'react-native';
import { Card } from './Card';
import { CardapioCards } from './CardapioCards';
import { CardapioDescription } from './CardapioDescription';
import { CardapioTitle } from './CardapioTitle';
import { CardapioWrap } from './CardapioWrap';
import cafe from '../../assets/images/café.png'
import prato from '../../assets/images/prato-de-sopa.png'
import refeicao from '../../assets/images/refeicao.png'
export const Cardapio = () => {
    return (
        <CardapioWrap>
          
            <CardapioTitle>Nosso Cárdapio </CardapioTitle>
            
                <CardapioCards>
                    <Card>
                        <Image source={cafe} />
                        <CardapioDescription>Bebida</CardapioDescription>
                        <Text>
                            Oferecemos o melhor sabor de cada um dos setores. você vai adorar.
                        </Text>
                    </Card>
                    <Card>
                        <Image source={prato} />
                        <CardapioDescription>Refeição</CardapioDescription>
                        <Text>
                            Oferecemos o melhor sabor de cada um dos setores. você vai adorar.
                        </Text>
                    </Card>
                    <Card>
                        <Image source={refeicao} />
                        <CardapioDescription>Prato especial</CardapioDescription>
                        <Text>
                            Oferecemos o melhor sabor de cada um dos setores. você vai adorar.
                        </Text>
                    </Card>
                </CardapioCards>
           
        </CardapioWrap>
    )
}

export default Cardapio;