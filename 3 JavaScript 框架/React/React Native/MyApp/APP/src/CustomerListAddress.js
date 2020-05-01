import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  View,
  Image,
  Switch,
} from 'react-native';

export default class CustomerListInfo extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>

        {/* 基本信息 */}
        <Text style={styles.toptext}>基本信息</Text>
        <View style={styles.views}>
          <View style={styles.view}>
            <Text style={styles.text}>选择地区</Text>
            <View style={styles.onview}>
              <Text style={styles.onviewtext}>请选择</Text>
              <Image style={styles.image} source={require('../icons/Path 158.png')} />
            </View>
          </View>
          <View style={[styles.view, styles.noBorderBottom]}>
            <Text style={styles.text}>详细地址</Text>
            <View style={styles.onview}>
              <Text style={styles.onviewtext}>街道门牌信息</Text>
              <Image style={styles.image} source={require('../icons/Path 158.png')} />
            </View>
          </View>
          <View style={[styles.view, styles.noBorderBottom]}>
            <Text style={styles.text}></Text>
            <TextInput style={styles.textinput} placeholder='请输入详细地址' placeholderTextColor='#777' underlineColorAndroid='transparent' />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  toptext: {
    paddingTop: 16,
    paddingLeft: 20,
    paddingBottom: 8,
    color: '#999',
    fontSize: 14,
  },
  views: {
    paddingLeft: 20,
    backgroundColor: '#fff',
  },
  view: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#DBDBDB',
  },
  noBorderBottom: {
    borderBottomWidth: 0,
  },
  text: {
    flex: 1,
    color: '#000',
    fontSize: 16,
  },
  textinput: {
    flex: 3,
    paddingRight: 36,
    color: '#777',
    fontSize: 16,
    textAlign: 'right',
  },
  onview: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  onviewtext: {
    color: '#777',
    fontSize: 16,
  },
  image: {
    width: 6,
    height: 10,
    marginRight: 20,
    marginLeft: 10,
  },
})
