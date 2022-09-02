import * as useWeather_ from '../useWeather ';

// @ponicode
describe('useWeather_.useWeather', () => {
  test('0', () => {
    let callFunction: any = () => {
      useWeather_.useWeather();
    };

    expect(callFunction).toThrow(
      "Cannot read properties of null (reading 'useCallback')"
    );
  });
});
