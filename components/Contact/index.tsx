import React from 'react';
import { ImageBackground, Image } from 'react-native';
import { vars } from '../../values';
import { Button } from '../Button';
import { InputField } from '../InputField';
import { ContactBody } from './ContactBody';
import { ContactImgBackground } from './ContactImgBackground';
import { ContactTitle } from './ContactTitle';
import { ContactWrap } from './ContactWrap';
import image from '../../assets/images/contact.jpg'


const Contact = () => {
    return (
        <ContactWrap>
           
            <Image 
                source={image}
                // resizeMode="cover"
                style={{ height: 400}}
            
            />
            {/* <ContactImgBackground
            >
            </ContactImgBackground> */}
            <ContactBody>

                <ContactTitle>
                    Junte-se a nós e
                    ganhe desconto de até 40%
                </ContactTitle>
                
                <InputField
                    label="E-mail"
                    style={{ marginTop: vars.space, borderColor: 'white', }}
                    inputProps={{
                        autoComplete: 'email',
                        keyboardType: 'email-address',
                    }}
                />
              
                <Button 
                    style={{ 
                        marginTop: vars.space,
                        backgroundColor: vars.blueButton
                    }} 
                    color="blue"
                >
                    Enviar
                </Button>
            </ContactBody>
        </ContactWrap>
    )
}

export default Contact;
