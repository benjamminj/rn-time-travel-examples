import React from 'react';
import { Dimensions, Button, StyleSheet, View } from 'react-native';
import Drawer from './Drawer';

const { height, width } = Dimensions.get('window');

export default class App extends React.Component {
  state = {
    showDrawer: false,
  };

  render() {
    const { showDrawer } = this.state;
    return (
      <View style={styles.container}>
        <Button
          testID="openButton"
          title="open drawer"
          accessibilityLabel="open drawer"
          onPress={() => this.setState({ showDrawer: true })}
        />
        <Drawer
          isOpen={showDrawer}
          close={() => this.setState({ showDrawer: false })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height,
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
