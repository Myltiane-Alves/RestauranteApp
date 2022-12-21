import React from 'react';

import * as S from './styles';

const AboutComponent = () => {
    return (

        <S.Container>
            <div className="about">

                <h2>A Melhor Pizza da cidade</h2>
                <p>
                    Nossa Hamburgueria oferece os melhores Hambúrguer<br /> que você já experimentou.
                    Vamos aproveitar a oportunidade para impressioná-lo com algo que é ótimo para você.
                    Mantemos nossas qualidades alimentares no seu melhor.
                </p>
                <div className="containerButton">

                    <button>
                        <Link className="link" href="/Menu">
                            Veja mais receitas
                        </Link>
                    </button>
                </div>

            </div>
            <div className="containerImg">
                {/* <img src="/images/restaurantee.jpeg" alt="" /> */}
            </div>
        </S.Container>

    )
}

export default AboutComponent;
