import { useNavigationState } from '@react-navigation/native';
import { vars } from '../../values';
import { InputField } from '../InputField';
import { SchedulesDescription } from './SchedulesDescription';
import { SchedulesWrap } from './SchedulesWrap';
import React, { useState } from 'react'
import { Button } from '../Button';
import { View } from 'react-native';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const FormSchedule = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    const [quantity, setQuantity] = useState('');

    return (

        <SchedulesWrap>
            <SchedulesDescription>Reserva de Mesa</SchedulesDescription>

            <InputField
                label="Nome Completo"
                style={{ marginTop: vars.space }}
                inputProps={{ value: name, onChangeText: setName }}
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
                label="Quantas Pessoas ?"
                style={{ marginTop: vars.space }}
                inputProps={{
                    value: quantity,
                    onChangeText: setQuantity,
                }}
            />
            

           
            <InputField
                label='Data e Hora'
                style={{ marginTop: vars.space}}
                inputProps={{

                }}
            />
                
               
            

            <Button>
                Reservar
            </Button>

        </SchedulesWrap>

    )
}

// export default FormSchedule;
