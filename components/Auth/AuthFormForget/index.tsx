import { useDrawerNavigation } from '../../../hooks/useDrawerNavigation';
import { Screen } from '../../../screens';
import { vars } from '../../../values';
import { Button } from '../../Button';
import { AuthFormFooter } from '../AuthFormFooter';
import { AuthFormForgetWrap } from '../AuthFormForgetWrap';
import check from '../../../assets/check.png';
import { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { AuthForgetMessage } from '../AuthForgetMessage';
import { AuthForgetText } from '../AuthForgetText';
import { AuthForgetIcon } from '../AuthForgetIcon';
import { useAuth } from '../../../hooks/useAuth';

export const AuthFormForget = () => {

  return (
    <AuthFormForgetWrap>
 
      
        <AuthForgetMessage>
          <ActivityIndicator size="small" color={vars.blue} />
          <AuthForgetText>Enviando e-mail...</AuthForgetText>
        </AuthForgetMessage>
   
        <AuthForgetMessage>
          <AuthForgetIcon source={check} />
          <AuthForgetText>
            Verifique as instruções no seu e-mail.
          </AuthForgetText>
        </AuthForgetMessage>
    
      <AuthFormFooter style={{ justifyContent: 'center' }}>
        <Button
          color="text"
          
        >
          Voltar para o login
        </Button>
      </AuthFormFooter>
    </AuthFormForgetWrap>
  );
};
