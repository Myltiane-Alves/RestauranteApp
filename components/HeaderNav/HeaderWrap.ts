import styled from "styled-components/native";
import { vars } from "../../values";


export const HeaderWrap = styled.View`
    /* background-color: ${vars.white}; */
    background-color: ${vars.blue};
    width: 100%;
    min-height: ${vars.space * 4}px;
    position: absolute;
    flex-direction: row-reverse;
    justify-content: space-between;
`;