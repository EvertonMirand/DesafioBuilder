import { render } from '@testing-library/react-native';
import BuilderButton from '../../componets/shared/BuilderButton';

describe('BuilderButton', () => {
  it('should show text', () => {
    const { getByTestId } = render(
      <BuilderButton text="Title" />
    );
    const element = getByTestId('builder-button-text');
    expect(element.props.children).toBe('Title');
  });
});
