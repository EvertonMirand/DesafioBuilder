import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
  BuilderText,
  BuilderTextProps
} from '../../styles/Styles';
import { ButtonContainer } from './BuilderButton.style';

export interface BuilderButtonProps
  extends Omit<
    TouchableOpacityProps & BuilderTextProps,
    'children'
  > {
  text: string;
}

const BuilderButton: React.FC<BuilderButtonProps> = ({
  text,
  color,
  fontSize,
  fontWeight,
  ...rest
}) => {
  return (
    <ButtonContainer {...rest}>
      <BuilderText
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
      >
        {text}
      </BuilderText>
    </ButtonContainer>
  );
};

export default BuilderButton;
