import React from 'react';
import { Container } from './styles';

export const Cardapio = () => {
    return (
        <Container>
            <header>
             <h2>Nosso Cárdapio </h2>
            </header>
                <div className="cards">
                    <div className="card">
                        <img src="./images/café.png" alt="café" />
                        <h3>Bebida</h3>
                        <p>
                            Oferecemos o melhor sabor de cada um dos setores. você vai adorar.
                        </p>
                    </div>
                    <div className="card">
                        <img src="./images/prato-de-sopa.png" alt="Prato de sopa" />
                        <h3>Refeição</h3>
                        <p>
                            Oferecemos o melhor sabor de cada um dos setores. você vai adorar.
                        </p>
                    </div>
                    <div className="card">
                        <img src="./images/refeicao.png" alt="Refeição" />
                        <h3>Prato especial</h3>
                        <p>
                            Oferecemos o melhor sabor de cada um dos setores. você vai adorar.
                        </p>
                    </div>
                </div>
           
        </Container>
    )
}

export default Cardapio;