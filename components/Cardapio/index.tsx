import React from 'react';
import { Text } from 'react-native';
import { Card } from './Card';
import { CardapioCards } from './CardapioCards';
import { CardapioDescription } from './CardapioDescription';
import { CardapioTitle } from './CardapioTitle';
import { CardapioWrap } from './CardapioWrap';

export const Cardapio = () => {
    return (
        <CardapioWrap>
          
            <CardapioTitle>Nosso Cárdapio </CardapioTitle>
            
                <CardapioCards>
                    <Card>
                        <img src="./images/café.png" alt="café" />
                        <CardapioDescription>Bebida</CardapioDescription>
                        <Text>
                            Oferecemos o melhor sabor de cada um dos setores. você vai adorar.
                        </Text>
                    </Card>
                    <Card>
                        <img src="./images/prato-de-sopa.png" alt="Prato de sopa" />
                        <CardapioDescription>Refeição</CardapioDescription>
                        <Text>
                            Oferecemos o melhor sabor de cada um dos setores. você vai adorar.
                        </Text>
                    </Card>
                    <Card>
                        <img src="./images/refeicao.png" alt="Refeição" />
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