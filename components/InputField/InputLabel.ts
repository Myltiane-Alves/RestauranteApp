import styled from 'styled-components/native';
import { vars } from '../../values';
import { InputFocusedProps } from './InputFocusedProps';

export const InputLabel = styled.Text<InputFocusedProps>`
  width: 100%;
  color: ${(props) => (props.focused ? vars.blue : vars.gray)};
`;
