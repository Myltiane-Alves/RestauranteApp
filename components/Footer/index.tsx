import { Image } from 'react-native';
import { FooterIcons } from './FooterIcons';
import { FooterText } from './FooterText';
import { FooterTitle } from './FooterTitle';
import { FooterWrap } from './FooterWrap';
import linkedin from '../../assets/images/linkedin.png';
import instagram from '../../assets/images/instagram.png';
import tiktok from '../../assets/images/tiktok.png';
import googleplay from '../../assets/images/googleplay.png';
import { FooterImage } from './FooterImage';

export default function Footer() {
    return (
      <FooterWrap>
          
        <FooterTitle>Pizzaria e Hamburgueria</FooterTitle>
        <FooterText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et,
          in gravida. Sit diam duis mauris nulla cursus.
          Erat et lectus vel ut sollicitudin elit at amet.
        </FooterText>    
        <FooterIcons>
          <FooterImage source={linkedin} />
          <FooterImage source={instagram} />
          <FooterImage source={tiktok} />
          <FooterImage source={googleplay} />
       
        </FooterIcons>
        <FooterTitle>Endereço</FooterTitle>
        <FooterText>
          Brasília - DF Setor Comecial Sul Distrito Federal
        </FooterText>   
        
      </FooterWrap>
    )
}
