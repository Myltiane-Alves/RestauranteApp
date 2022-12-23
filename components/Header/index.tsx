import React, { useCallback, useState } from 'react';
import { vars } from '../../values';
import { Button } from '../Button';
import { InputField } from '../InputField';
import { Description } from './Description';
import { HomeBanner } from './HomeBanner';
import { HomeBannerWrap } from './HomeBannerWrap';
// import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import banner from '../../assets/images/banner-1.jpg';
import { Title } from './Title';
import { HomeBannerContent } from './HomeBannerContent';
import { SchedulesWrap } from '../FormSchedule/SchedulesWrap';


const Header = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [date, setDate] = useState<Date | null>(null)


  // const pickerDate = useCallback(() => {
  //   DateTimePickerAndroid.open({
  //     value: date ? date : new Date(),
  //     mode: 'date',
  //     maximumDate: new Date(),
  //     onChange: (_event, dateHour) => {
  //       if(dateHour) {
  //         setDate(dateHour)
  //       }
  //     }
  //   })
  // }, [date]);

  return (

    <HomeBannerWrap>
      <HomeBanner source={banner} resizeMode="cover" />
      <HomeBannerContent>
        <Title>Prove os melhores Deliciosos pratos.</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Description>
        <Button style={{ marginTop: vars.space }} color="blue">
          Faça Já sua Reserva
        </Button>
      </HomeBannerContent>
      {/* <SchedulesWrap>
        <Title>Reserva de Mesa</Title>

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
          label="Nome Completo"
          style={{ marginTop: vars.space }}
          inputProps={{ value: name, onChangeText: setName }}
        />

      </SchedulesWrap> */}



{/* 
      <InputField
        label="Quantas Pessoas"
        style={{ marginTop: vars.space }}
        inputProps={{
          onChangeText: () => {},
          onKeyPress: ({ nativeEvent }) => {
          },
        }}
      /> */}
      
      {/* <InputField
        label="Data de Nascimento"
        style={{ marginTop: vars.space }}
        inputProps={{
          value: date instanceof Date ? format(date, 'dd/MM/yyyy') : '',
          autoComplete: 'birthdate-full',
          onPressIn: pickerBirthAt,
          onChangeText: () => {},
          onKeyPress: ({ nativeEvent }) => {
            if (nativeEvent.key === 'Backspace') {
              setDate(null);
            } else {
              setDate(date);
            }
          },
        }}
      /> */}

      {/* <div className="field">

        <input type="date" name="birth_at" />
      </div>

      <div className="field">
        <label>Hora</label>
        <input type="time" name="birth_at" />
      </div>


      <div className="actions">

        <button type="submit">
          Reservar
        </button>
      </div> */}




    </HomeBannerWrap>

  )
}

export default Header;
