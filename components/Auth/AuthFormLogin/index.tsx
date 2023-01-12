import { useState } from 'react';
import { AuthFormLoginWrap } from '../AuthFormLoginWrap';
import { InputField } from '../../InputField';
import { vars } from '../../../values';
import { AuthFormFooter } from '../AuthFormFooter';
import { Button } from '../../Button';
import { useDrawerNavigation } from '../../../hooks/useDrawerNavigation';
import { Screen } from '../../../screens';
import { useAuth } from '../../../hooks/useAuth';
import { PageTitle } from '../../PageTitle';

export const AuthFormLogin = () => {
    const navigation = useDrawerNavigation();
    const { onSubmitLogin, email, setEmail, isLoading } = useAuth();
    const [password, setPassword] = useState('')


    return (
        <AuthFormLoginWrap>
            <PageTitle title="Fazer Login" />
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
            <InputField
                label="Senha"
                style={{ marginTop: vars.space }}
                inputProps={{
                    secureTextEntry: true,
                    value: password,
                    onChangeText: setPassword,
                }}
            />

            <AuthFormFooter>
                <Button
                    color="text"
                    onPress={() => navigation.navigate(Screen.AuthForget)}
                >
                    Esqueceu sua senha?
                </Button>

                <Button
                    color="blue"
                    // loading={isLoading}
                    // disabled={isLoading}
                    
                >
                    Login
                </Button>
            </AuthFormFooter>
            <AuthFormFooter
                style={{ justifyContent: 'center', marginTop: vars.space }}
            >
                <Button
                    color="text"
                    onPress={() => navigation.navigate(Screen.AuthEmail)}
                >
                    Este não é o seu e-mail?
                </Button>
            </AuthFormFooter>
        </AuthFormLoginWrap>
    )
}



{/* <div className="container-icons">
    <div>
        <Link href="https://www.linkedin.com/in/myltiane-alves/">
            <img src="/images/linkedin.png" alt="Logo Linkedin Confira nossa página no Linkedin" />
        </Link>
    </div>
    <div>
        <Link href="https://www.instagram.com">
            <img src="/images/instagram.png" alt="Logo Instagram Confira nossa página no Instagram" />
        </Link>
    </div>
    <div>
        <Link href="https://api.whatsapp.com/send/?phone=5561984915007&text=Vim+Pelo+site&app_absent=0">
            <img src="/images/whatsapp.png" alt="Logo Whatsapp Entre em Contato Conosco pelo Whatsapp" />
        </Link>
    </div>
    <div>
        <Link href="https://youtube.com">
            <img src="/images/googleplay.png" alt="Logo Play Store baixe nosso aplicativo na loja" />
        </Link>
    </div>

</div> */}