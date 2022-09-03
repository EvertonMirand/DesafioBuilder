import { colors } from './../utils/colors';
import styled from 'styled-components/native';

export interface BuilderTextProps {
  color?: string;
  fontSize?: number;
  fontWeight?: string | number;
}

export const BuilderText = styled.Text<BuilderTextProps>`
  color: ${({ color = colors.primaryText }) => color};
  font-size: ${({ fontSize = 15 }) => fontSize}px;
  font-weight: ${({ fontWeight = 'normal' }) => fontWeight};
`;

export const BottomSpace = styled.View<{ size: number }>`
  margin-bottom: ${({ size }) => size}px;
`;
