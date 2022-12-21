import React from 'react';
import { vars } from '../../values';
import { Button } from '../Button';
import { InputField } from '../InputField';
import { ContactBody } from './ContactBody';
import { ContactTitle } from './ContactTitle';
import { ContactWrap } from './ContactWrap';
import { Container } from './styles';


const Contact = () => {
    return (
        <ContactWrap>
            <ContactBody>

                <ContactTitle>
                    Junte-se a nós e <br />
                    ganhe desconto de até 40%
                </ContactTitle>
                <InputField label="Nome Completo" style={{ marginTop: vars.space }} />
                <InputField
                    label="E-mail"
                    style={{ marginTop: vars.space }}
                    inputProps={{
                        autoComplete: 'email',
                        keyboardType: 'email-address',
                    }}
                />
                <InputField
                    label="Mensagem"
                    style={{ marginTop: vars.space, marginBottom: vars.space }}
                    inputProps={{
                        multiline: true,
                    }}
                />
                <Button color="blue">Enviar</Button>
            </ContactBody>
        </ContactWrap>
    )
}

export default Contact;
