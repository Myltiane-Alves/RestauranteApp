import React from 'react';
import * as S from './styles';
import Link from 'next/link'

const Contact = () => {
    return (
        <S.Container>
            <div className="cards ">
                <div className="card">
                    <h2>
                        Junte-se a nós e <br />
                        ganhe desconto de até 40%
                    </h2>
                    <form>
                        <div className="field">
                            <input type="email" placeholder="Digite seu Email" />
                        </div>

                        <div className="containerButton">
                            <button type="submit">
                                Inscreva-se
                            </button>

                        </div>

                    </form>
                </div>
            </div>

        </S.Container>
    )
}

export default Contact;
