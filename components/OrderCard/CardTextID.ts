import styled from 'styled-components/native';
import { vars } from '../../values';

export const CardTextID = styled.Text`
    transform: rotate(-90deg);
    margin: 0 8px;
    font-size: 24px;
    color: ${vars.dark};
    position: absolute;
    top: 65px;
    left: -55px;
`;
