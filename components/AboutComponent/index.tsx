import React from 'react';
import { Image } from 'react-native';
import { vars } from '../../values';
import { Button } from '../Button';
import { AboutTitle } from './AboutTitle';
import { AboutWrap } from './AboutWrap';
import { Description } from './Description';
import restaurante from '../../assets/images/restaurantee.jpeg';
import { AboutImage } from './AboutImage';

const AboutComponent = () => {
    return (

        <AboutWrap>

            <AboutTitle>A Melhor Pizza da cidade</AboutTitle>
            <Description>
                Nossa Hamburgueria oferece os melhores Hambúrguer que você já experimentou.
                Vamos aproveitar a oportunidade para impressioná-lo com algo que é ótimo para você.
                Mantemos nossas qualidades alimentares no seu melhor.
            </Description>

            <AboutImage  source={restaurante}   />
            <Button style={{ marginTop: vars.space }} color="blue"> Veja mais receitas </Button>
         
        </AboutWrap>

    )
}

export default AboutComponent;
