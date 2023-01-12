import styled from 'styled-components/native';
import { vars } from '../../values';
import { InputFocusedProps } from './InputFocusedProps';

export const InputWrap = styled.View<InputFocusedProps>`
  width: 100%;
  border: 2px solid ${(props) => (props.focused ? vars.blue : vars.gray)};
  padding: ${vars.space / 2}px;
  border-radius: ${vars.borderRadius}px;
`;
