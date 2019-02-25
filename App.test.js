import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

beforeEach(() => {
  jest.useFakeTimers();
});

describe('<App />', () => {
  test('opens the menu', async () => {
    const container = renderer.create(<App />);
    const openButton = container.root.findByProps({ testID: 'openButton' });

    const drawer = container.root.findByProps({ testID: 'Drawer' });
    const drawerTranslateXValue =
      drawer.props.style.transform[0].translateX._value;

    console.log(JSON.stringify(container.toJSON(), null, 4));

    openButton.props.onPress();

    // jest.advanceTimersByTime(300);
    expect(drawerTranslateXValue).toEqual(0);
  });
});
