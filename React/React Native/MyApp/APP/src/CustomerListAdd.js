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

export default class CustomerListAdd extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>

        {/* 基本信息 */}
        <Text style={styles.toptext}>基本信息</Text>
        <View style={styles.views}>
          <View style={styles.view}>
            <Text style={styles.text}>姓名</Text>
            <TextInput style={styles.textinput} placeholder='请输入姓名' placeholderTextColor='#777' underlineColorAndroid='transparent' />
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>性别</Text>
            <View style={styles.onview}>
              <Text style={styles.onviewtext}>请选择</Text>
              <Image style={styles.image} source={require('../icons/Path 158.png')} />
            </View>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>手机</Text>
            <TextInput style={styles.textinput} placeholder='常用手机号' placeholderTextColor='#777' keyboardType='numeric' underlineColorAndroid='transparent' />
          </View>
          <View style={[styles.view,styles.noBorderBottom]}>
            <Text style={styles.text}>邮箱</Text>
            <TextInput style={styles.textinput} placeholder='常用电子邮箱' placeholderTextColor='#777' keyboardType='email-address' underlineColorAndroid='transparent' />
          </View>
        </View>

        {/* 其他信息 */}
        <Text style={styles.toptext}>其他信息</Text>
        <View style={styles.views}>
          <View style={styles.view}>
            <Text style={styles.text}>公司</Text>
            <TextInput style={styles.textinput} placeholder='请输入公司名称' placeholderTextColor='#777' underlineColorAndroid='transparent' />
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>职务</Text>
            <TextInput style={styles.textinput} placeholder='请输入职务' placeholderTextColor='#777' underlineColorAndroid='transparent' />
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>座机</Text>
            <TextInput style={styles.textinput} placeholder='常用座机号' placeholderTextColor='#777' keyboardType='numeric' underlineColorAndroid='transparent' />
          </View>
          <View style={[styles.view, styles.noBorderBottom]}>
            <Text style={styles.text}>地址</Text>
            <View style={styles.onview}>
              <Text style={styles.onviewtext}>请选择所在省市区</Text>
              <Image style={styles.image} source={require('../icons/Path 158.png')} />
            </View>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}></Text>
            <TextInput style={styles.textinput} placeholder='请输入详细地址' placeholderTextColor='#777' underlineColorAndroid='transparent' />
          </View>
          <View style={[styles.view,styles.noBorderBottom]}>
            <Text style={styles.text}>备注</Text>
            <TextInput style={styles.textinput} placeholder='请填写' placeholderTextColor='#777' underlineColorAndroid='transparent' />
          </View>
        </View>

        {/* 保存到通讯录 */}
        <View style={[styles.views,styles.viewswitch]}>
          <View style={[styles.view,styles.noBorderBottom]}>
            <Text style={styles.text}>保存到通讯录</Text>
            <Switch style={styles.switch} trackColor='#09BB07' thumbColor='#fff' value={true} />
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
    flex: 4,
    color: '#777',
    fontSize: 16,
  },
  onview: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  },
  viewswitch: {
    marginTop: 12,
    marginBottom: 12,
  },
  switch: {
    marginRight: 20,
  },
})
