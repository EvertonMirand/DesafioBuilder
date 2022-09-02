import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const Container = styled.Modal`
  width: ${width / 2}px;
  padding: 10px;
`;
