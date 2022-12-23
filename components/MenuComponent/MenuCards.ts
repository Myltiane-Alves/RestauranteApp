import styled from 'styled-components/native';
import { vars } from '../../values';

export const MenuCards = styled.View`
    width: 200px;
    background-color: ${vars.white};
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    /* background-color: red; */
    border-radius: 10px;
    box-shadow: 0 0.5px 10px rgba(0, 0, 0, 0.1);
`;
