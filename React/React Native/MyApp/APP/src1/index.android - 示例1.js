/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert
} from 'react-native';

// 文字闪烁效果
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
    // 等同下面这个函数
    // setInterval(() => {
    //   this.setState({
    //     isShowingText: !this.state.isShowingText
    //   })
    // }, 1000)
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    if (!this.state.isShowingText) {
      return (
        <Text>{this.props.texts}</Text>
      );
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}

// 你好，张三李四王二麻子
class Greeting extends Component {
  render() {
    return (
      // <Text style={this.props.textclass}>你好，{this.props.name}!</Text>
      <Text>你好，{this.props.name}!</Text>
    )
  }
}

export default class MyApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          欢迎来到 React Native !{'\n'}很不高兴见到你！！！
        </Text>
        <Text style={styles.hello}>Hello, world!{'\n'}你好，世界！</Text>
        <Image source={require('./icons/meinv.jpg')} style={styles.image} />
        <View style={styles.juzhong}>
          <Greeting name='张三' />
          <Greeting name='李四' />
          <Greeting name='王二麻子' />
        </View>
        <Blink text='你是大傻逼吗？？哈哈哈~' texts='你不是大傻逼？！哈哈哈~' />
        <Button
          onPress={() => { Alert.alert("你点击了按钮！") }}
          title="点我！"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  hello: {
    padding: 15,
    marginBottom: 5,
    textAlign: 'center',
    color: '#333333',
    backgroundColor: '#eee',
  },
  image: {
    width: 193,
    height: 110,
    backgroundColor: 'red',
  },
  juzhong: {
    alignItems: 'center',
  }
})
