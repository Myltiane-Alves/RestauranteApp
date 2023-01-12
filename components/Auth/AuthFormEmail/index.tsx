import { InputField } from '../../InputField';
import { vars } from '../../../values';
import { AuthFormFooter } from '../AuthFormFooter';
import { Button } from '../../Button';
import { useDrawerNavigation } from '../../../hooks/useDrawerNavigation';
import { Screen } from '../../../screens';
import { AuthFormEmailWrap } from './AuthFormEmailWrap';
import { PageTitle } from '../../PageTitle';
import { useAuth } from '../../../hooks/useAuth';
export const AuthFormEmail = () => {
    const navigation = useDrawerNavigation();
    const { email, setEmail, onSubmitEmail, isLoading } = useAuth();

    return (
        <AuthFormEmailWrap>
            <PageTitle title="Autenticação" />
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
                    onPress={onSubmitEmail}
                    loading={isLoading}
                    disabled={isLoading}
                >
                    Próximo
                </Button>
            </AuthFormFooter>
          
        </AuthFormEmailWrap>
    )
}


