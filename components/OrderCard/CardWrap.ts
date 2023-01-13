import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { vars } from '../../values';

export const CardWrap = styled.View`
    flex-direction: row;
    width: 100%;
    height: 200px;
    background-color: ${vars.white};
    border-radius: ${vars.spacePx};
    margin-bottom: ${vars.space * 2}px;
    position: relative;
`;
