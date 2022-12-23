import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const HomeBanner = styled.Image`
    width: 100%;
    height: ${Dimensions.get('screen').height - 341}px;
`;
