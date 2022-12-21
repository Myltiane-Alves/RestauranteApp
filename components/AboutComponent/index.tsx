import React from 'react';
import { Container } from './styles';

const AboutComponent = () => {
    return (

        <Container>
            <div className="about">

                <h2>A Melhor Pizza da cidade</h2>
                <p>
                    Nossa Hamburgueria oferece os melhores Hambúrguer<br /> que você já experimentou.
                    Vamos aproveitar a oportunidade para impressioná-lo com algo que é ótimo para você.
                    Mantemos nossas qualidades alimentares no seu melhor.
                </p>
                <div className="containerButton">

                    <button>
                       
                            Veja mais receitas
                 
                    </button>
                </div>

            </div>
            <div className="containerImg">
                {/* <img src="/images/restaurantee.jpeg" alt="" /> */}
            </div>
        </Container>

    )
}

export default AboutComponent;
