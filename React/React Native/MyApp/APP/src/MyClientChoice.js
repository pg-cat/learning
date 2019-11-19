import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class MyClientChoice extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.left}>会话咨询沟通</Text>
          <Image style={styles.image} source={require('../icons/Path 158.png')} />
        </View>
        <Text style={styles.text}>通过电话、微信、QQ、邮件等远程方式沟通</Text>
        <View style={styles.view}>
          <Text style={styles.left}>见面咨询沟通</Text>
          <Image style={styles.image} source={require('../icons/Path 158.png')} />
        </View>
        <Text style={styles.text}>现场见面沟通</Text>
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
  view: {
    height: 48,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 8,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    color: '#000',
    fontSize: 16,
  },
  image: {
    width: 6,
    height: 10,
    marginLeft: 10,
  },
  text: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 23,
    color: '#999',
    fontSize: 14,
  },
})
