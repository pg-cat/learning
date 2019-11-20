import React from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
} from 'react-native';

export default class MyClientMeet extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textinput} placeholder='请输入咨询沟通内容' underlineColorAndroid='transparent' />
        <View style={styles.view}>
          <Text style={styles.left}>见面地址</Text>
          <View style={styles.right}>
            <Text style={styles.text}>选填</Text>
            <Image style={styles.image} source={require('../icons/Path 158.png')} />
          </View>
        </View>
        <View style={styles.view}>
          <Text style={styles.left}>下次回访提醒</Text>
          <View style={styles.right}>
            <Text style={styles.text}>选填</Text>
            <Image style={styles.image} source={require('../icons/Path 158.png')} />
          </View>
        </View>
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
  textinput: {
    height: 294,
    paddingTop: 11,
    paddingLeft: 18,
    paddingBottom: 11,
    paddingRight: 18,
    fontSize: 16,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
  },
  view: {
    height: 48,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    color: '#000',
    fontSize: 16,
  },
  right: {
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#777',
    fontSize: 16,
  },
  image: {
    width: 6,
    height: 10,
    marginLeft: 10,
  },
})
