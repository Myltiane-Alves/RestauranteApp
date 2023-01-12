import { useNavigationState } from '@react-navigation/native';
import { format } from 'date-fns';
import { vars } from '../../values';
import { InputField } from '../InputField';
import { SchedulesDescription } from './SchedulesDescription';
import { SchedulesWrap } from './SchedulesWrap';
import React, { useCallback, useState } from 'react'
import { TextInput, View } from 'react-native'
import { Button } from '../Button';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { PageTitle } from '../PageTitle';


export const FormSchedule = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [appointmentDate, setAppoinmentDate] = useState(new Date());
    const [quantity, setQuantity] = useState('');

    const pickerAppointmentDate = useCallback(() => {
        DateTimePickerAndroid.open({
            value: appointmentDate ? appointmentDate : new Date(),
            mode: 'date',
            maximumDate: new Date(),
            onChange: (_event, date) => {
                if (date) {
                    setAppoinmentDate(date)
                }
            },
        });
    },  [appointmentDate]);

    return (

        <SchedulesWrap>
            {/* <SchedulesDescription>Reserva de Mesa</SchedulesDescription> */}
            <PageTitle title="Reserva de Mesa" />
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
                label={"Informe a Quantidades de Pessoas ?"}
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
                    value: appointmentDate  instanceof Date ? format(appointmentDate, 'dd/MM/yyyy') : '',
                    autoComplete: 'birthdate-full',
                    onPressIn: pickerAppointmentDate,
                    onChangeText: () => {},
                    onKeyPress: ({ nativeEvent }) => {
                        if (nativeEvent.key === 'Backspace') {
                            setAppoinmentDate(null)
                        } else {
                            setAppoinmentDate(appointmentDate)
                        }
                    },
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
