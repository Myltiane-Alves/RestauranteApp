
import { FooterIcons } from './FooterIcons';
import { FooterText } from './FooterText';
import { FooterTitle } from './FooterTitle';
import { FooterWrap } from './FooterWrap';
import { Container } from './styles';

export default function Footer() {
    return (
      <FooterWrap>
          
        <FooterTitle>Pizzaria e Hamburgueria</FooterTitle>
        <FooterText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et,
          in gravida. Sit diam duis mauris nulla cursus.
          Erat et lectus vel ut sollicitudin elit at amet.
        </FooterText>    
        <FooterIcons>
          <img src="images/linkedin.png" alt="Nosso Linkedin confira nossa rede social" />
          <img src="images/instagram.png" alt="Nosso instagram confira nossa rede social" />
          <img src="images/tiktok.png" alt="Nosso tiktok confira nossa rede social" />
          <img src="images/googleplay.png" alt="Baixe já nosso app no Google Play" />
          {/* <span>Google Play</span> */}
        </FooterIcons>
        <FooterTitle>Endereço</FooterTitle>
        <FooterText>
          Brasília - DF Setor Comecial Sul Distrito Federal
        </FooterText>   
        
      </FooterWrap>
    )
}
