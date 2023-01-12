import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { vars } from '../../values';

export const AuthBody = styled.View`
  padding: ${vars.spacePx};
  width: 100%;
  min-height: ${Dimensions.get('window').height - 292}px;
`;
