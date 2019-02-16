import React from 'react';
import { Dimensions, Button, Animated } from 'react-native';

const { height, width } = Dimensions.get('window');

export default class Drawer extends React.Component {
  state = {
    animation: new Animated.Value(this.props.isOpen ? 1 : 0),
  };

  componentDidUpdate(prevProps) {
    const { isOpen } = this.props;
    const { animation } = this.state;

    if (!prevProps.isOpen && isOpen) {
      Animated.timing(animation, {
        toValue: 1,
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
        style={{
          backgroundColor: '#ddd',
          height,
          width,
          transform: [
            {
              translateX: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [width, 0],
              }),
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
