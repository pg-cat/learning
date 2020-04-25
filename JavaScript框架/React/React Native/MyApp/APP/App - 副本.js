/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,Image } from 'react-native';

const instructions = Platform.select({
  ios: '这是只有在 ios 系统下才能看到的',
  android: '这是 android 系统下才能看到的，你个2B',
});

// type Props = {};
// export default class App extends Component<Props> {
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>滚，不想看到你！</Text>
        <Text style={styles.instructions}>不欢迎你来到这里.</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Image source={} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
