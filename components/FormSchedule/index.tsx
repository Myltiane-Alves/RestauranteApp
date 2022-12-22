import { useNavigationState } from '@react-navigation/native';
import { vars } from '../../values';
import { InputField } from '../InputField';
import { SchedulesDescription } from './SchedulesDescription';
import { SchedulesWrap } from './SchedulesWrap';
import React, { useState } from 'react'
import { Button } from '../Button';


export const FormSchedule = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
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

            <div className="field">
                <select name="Pessoas" id="">
                    <option> -- Quantas Pessoas -- </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5+</option>
                </select>
            </div>

            <div className="field">

                <input type="date" name="birth_at" />
            </div>
            <div className="field">
                <label>Hora</label>
                <input type="time" name="birth_at" />
            </div>

            <Button>
                Reservar
            </Button>

        </SchedulesWrap>

    )
}

// export default FormSchedule;
