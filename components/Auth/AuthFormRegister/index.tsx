import { useCallback, useState } from 'react';
import { format } from 'date-fns';
import { InputField } from '../../InputField';
import { vars } from '../../../values';
import { AuthFormRegisterWrap } from '../AuthFormRegisterWrap';
import { PageTitle } from '../../PageTitle';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { AuthFormFooter } from '../AuthFormFooter';
import { Button } from '../../Button';
import { useDrawerNavigation } from '../../../hooks/useDrawerNavigation';
import { useAuth } from '../../../hooks/useAuth';
import { Screen } from '../../../screens';

export const  AuthFormRegister = () => {
    const navigation = useDrawerNavigation();
    const {email, setEmail, onSubmitRegister, isLoading} = useAuth()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [birthAt, setBirthAt] = useState<Date | null>(null);
;

    const pickerBirthAt = useCallback(() => {
        DateTimePickerAndroid.open({
          value: birthAt ? birthAt : new Date(),
          mode: 'date',
          maximumDate: new Date(),
          onChange: (_event, date) => {
            if (date) {
              setBirthAt(date);
            }
          },
        });
    }, [birthAt]);

    return (
        <AuthFormRegisterWrap>
            <PageTitle title="Cadastrar Usuário" />
        
            <InputField
                label="Nome Completo"
                style={{ marginTop: vars.space }}
                inputProps={{ value: name, onChangeText: setName }}
            />

            <InputField
                label="Data de Nascimento"
                style={{ marginTop: vars.space }}
                inputProps={{
                    value: birthAt instanceof Date ? format(birthAt, 'dd/MM/yyyy') : '',
                    autoComplete: 'birthdate-full',
                    onPressIn: pickerBirthAt,
                    onChangeText: () => { },
                    onKeyPress: ({ nativeEvent }) => {
                        if (nativeEvent.key === 'Backspace') {
                            setBirthAt(null);
                        } else {
                            setBirthAt(birthAt);
                        }
                    },
                }}
            />

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
                label="Criar uma Senha"
                style={{ marginTop: vars.space }}
                inputProps={{
                    secureTextEntry: true,
                    value: password,
                    onChangeText: setPassword,
                }}
            />
            <InputField
                label="Confirme a Senha"
                style={{ marginTop: vars.space }}
                inputProps={{
                    secureTextEntry: true,
                    value: passwordConfirm,
                    onChangeText: setPasswordConfirm,
                }}
            />

            <AuthFormFooter>
                <Button
                    color="outline"
                    onPress={() => navigation.navigate(Screen.AuthLogin)}
                >
                    Já tem uma contal?
                </Button>
                <Button
                    color="blue"
                    loading={isLoading}
                    disabled={isLoading}
                    onPress={() =>
                        onSubmitRegister({
                            email,
                            name,
                            password,
                            passwordConfirm,
                            birthAt
                        })
                    }
                >
                    Cadastrar
                </Button>
            </AuthFormFooter>
        </AuthFormRegisterWrap>
    )
}

