import React from 'react';
import { Container } from './styles';

export const MenuComponent = () => {
    return (
        <Container>
            <header>
                <h2>Menu Principal</h2>
            </header>
            <div className="cards">
                <div className="card">
                    <div className="image">
                        <img src="/images/pizza.png" alt="Frango Tailandês" />
                    </div>

                    <Text>Frango Tailandês </Text>
                    <p>R$35,00</p>

                </div>
                <div className="card">
                    <div className="image">
                        <img src="/images/pizza2.png" alt="Massa tailandêsa" />
                    </div>
                    <h3>Massa Tailandêsa</h3>
                    <p>R$44,99</p>

                </div>
                <div className="card">
                    <div className="image">
                        <img src="/images/pizza2.png" alt="Massa tailandêsa" />
                    </div>
                    <h3>Salada de Frutas</h3>
                    <p>R$44,99</p>

                </div>

                <div className="card">
                    <div className="image">
                        <img src="/images/pizza.png" alt="Frango Tailandês" />
                    </div>

                    <h3>Frango Tailandês </h3>
                    <p>R$35,00</p>

                </div>
            </div>

            <div className="containerButton">
                <button>
                    Veja mais receitas
                    
                </button>
            </div>
        </Container>
    )
}

export default MenuComponent;
