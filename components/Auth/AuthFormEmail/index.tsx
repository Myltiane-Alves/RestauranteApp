import { useState } from 'react';
import { AuthFormLoginWrap } from '../AuthFormLoginWrap';
import { InputField } from '../../InputField';
import { vars } from '../../../values';
import { AuthFormFooter } from '../AuthFormFooter';
import { Button } from '../../Button';
import { useDrawerNavigation } from '../../../hooks/useDrawerNavigation';
import { Screen } from '../../../screens';
export const AuthFormEmail = () => {
    const navigation = useDrawerNavigation();
    const [email, setEmail] = useState('')

    //   const navigate = useNavigate()

    return (
        <AuthFormLoginWrap>
            <InputField
                label="E-mail"
                style={{ marginTop: vars.space }}
                inputProps={{
                    autoComplete: 'email',
                    keyboardType: 'email-address',
                    value: email,
                    onChangeText: setEmail,
                }}
            />

            <AuthFormFooter>
                <Button
                    color="text"
                    onPress={() => navigation.navigate(Screen.AuthRegister)}
                >
                    Criar uma Conta
                </Button>

                <Button
                    color="blue"
                >
                    Próximo
                </Button>
            </AuthFormFooter>
          
        </AuthFormLoginWrap>
    )
}


