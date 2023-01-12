import { useNavigationState } from '@react-navigation/native';
import { vars } from '../../values';
import { InputField } from '../InputField';
import { SchedulesDescription } from './SchedulesDescription';
import { SchedulesWrap } from './SchedulesWrap';
import React, { useState } from 'react'
import { TextInput, View } from 'react-native'
import { Button } from '../Button';


export const FormSchedule = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    const [quantity, setQuantity] = useState('');

    return (

        <SchedulesWrap>
            <SchedulesDescription>Reserva de Mesa</SchedulesDescription>

            <View>
                <TextInput>Nome Completo</TextInput>
                <InputField
                    label="Nome Completo"
                    style={{ marginTop: vars.space }}
                    inputProps={{ value: name, onChangeText: setName }}
                />

            </View>

            <TextInput>Email</TextInput>
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

            <TextInput>Quantas Pessoas</TextInput>
            <InputField
                label={"Quantas Pessoas ?"}
                style={{ marginTop: vars.space }}
                inputProps={{
                    value: quantity,
                    onChangeText: setQuantity,
                }}
            />
            

            <TextInput>Escolha Data e Hora</TextInput>
            <InputField
                label='Data e Hora'
                style={{ marginTop: vars.space}}
                inputProps={{

                }}
            />
                
               
            

            <Button
                style={{ marginTop: vars.space}}
                color="blue"
            >
                Reservar
            </Button>

        </SchedulesWrap>

    )
}

// export default FormSchedule;
