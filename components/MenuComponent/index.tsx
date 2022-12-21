import React from 'react';
import Link from 'next/link'
import * as S from './styles'


export const MenuComponent = () => {
    return (
        <S.Container>
            <header>
                <h2>Menu Principal</h2>
            </header>
            <div className="cards">
                <div className="card">
                    <div className="image">
                        <img src="/images/pizza.png" alt="Frango Tailandês" />
                    </div>

                    <h3>Frango Tailandês </h3>
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
                    <Link className="link" href="/menu">
                        Veja mais receitas
                    </Link>
                </button>
            </div>
        </S.Container>
    )
}

export default MenuComponent;
