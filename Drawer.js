import React from 'react';
import { Dimensions, Button, Animated } from 'react-native';

const { height, width } = Dimensions.get('window');

export default class Drawer extends React.Component {
  state = {
    animation: new Animated.Value(this.props.isOpen ? width : 0),
  };

  componentDidUpdate(prevProps) {
    const { isOpen } = this.props;
    const { animation } = this.state;

    if (!prevProps.isOpen && isOpen) {
      Animated.timing(animation, {
        toValue: width,
        duration: 300,
      }).start();
    }

    if (prevProps.isOpen && !isOpen) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
      }).start();
    }
  }

  render() {
    const { close } = this.props;
    const { animation } = this.state;

    return (
      <Animated.View
        testID="Drawer"
        style={{
          backgroundColor: '#ddd',
          height,
          width,
          transform: [
            {
              translateX: animation,
            },
          ],
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button
          title="close"
          accessibilityLabel="close drawer"
          onPress={close}
        />
      </Animated.View>
    );
  }
}
