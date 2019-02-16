import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('<App />', () => {
  test('opens the menu', () => {
    const container = renderer.create(<App />);
    const openButton = container.root.findByProps({ testID: 'openButton' });

    const drawer = container.root.findByProps({ testID: 'Drawer' });
    const drawerTranslateXValue =
      drawer.props.style.transform[0].translateX._value;

    openButton.props.onPress();
    expect(drawerTranslateXValue).not.toEqual(0);
    // open the drawer
  });
});
