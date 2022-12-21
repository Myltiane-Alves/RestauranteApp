import React from 'react';
import { Container } from './styles';


const Contact = () => {
    return (
        <Container>
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

        </Container>
    )
}

export default Contact;
