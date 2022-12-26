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
import { View } from 'react-native';
import { TitleSchedules } from './TitleSchedules';


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
        <View
          style={{ padding: 10}}
        >
          <Title>Aproveita as Melhores Pizzas da Cidades.</Title>
          <Description>
            Venha Conferiri Nossas, Promoções Todos os Dias da Semana
          </Description>

        </View>
        <View
          style={{
            alignItems: 'flex-start', 
            alignContent: 'flex-start',
            width: 405,
            left: 10

          }}
        
        >
          <Button style={{
            marginTop: vars.space, 
            width: 250,
            height: 50
          }} color="blue">
            Faça Já sua Reserva
          </Button>

        </View>
      </HomeBannerContent>
      <View
        style={{
          backgroundColor: 'transparent',
          flex: 1,
        
          
        }}
      >
        {/* <SchedulesWrap>
          <TitleSchedules>Reserva de Mesa</TitleSchedules>
         

          <InputField
            label="E-mail"
            style={{ marginTop: vars.space, width: 250, padding: 200 }}
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

          <Button style={{
            marginTop: vars.space, 
            width: 250,
            height: 50
          }} color="blue">
            Faça Já sua Reserva
          </Button>
        </SchedulesWrap> */}

      </View>



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
