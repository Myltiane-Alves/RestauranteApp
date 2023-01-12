import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { vars } from '../../values';

export const OrderWrap = styled.View`
    background-color: ${vars.dark};
    width: ${Dimensions.get("window").width}px;
    height: ${Dimensions.get("window").height}px;
`;
