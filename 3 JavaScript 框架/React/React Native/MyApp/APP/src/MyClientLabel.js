import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default class MyClientLabel extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>标签内容</Text>
        <TextInput style={styles.textinput} placeholder='请输入' placeholderTextColor='#000' underlineColorAndroid='transparent' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 11,
    backgroundColor: '#F4F4F4',
  },
  text: {
    paddingTop: 5,
    paddingLeft: 20,
    marginBottom: 8,
    color: '#999',
    fontSize: 14,
  },
  textinput: {
    height: 48,
    paddingLeft: 20,
    paddingRight: 20,
    color: '#000',
    fontSize: 16,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
})
