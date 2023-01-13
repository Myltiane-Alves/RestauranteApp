import styled from 'styled-components/native';
import { vars } from '../../values';

export const CardControls = styled.View`
    justify-content: space-around;
    align-items: center;
    width: 62px;
    height: 166px;
    border-style: dashed;
    border-left-color: ${vars.dark}; 
    border-left-width: 1px;
`;
