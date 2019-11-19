/**
 * 我的客户 页面文件引用部分
 */
// 添加见面咨询记录
import MyClientMeet from './src/MyClientMeet';
// 添加会话咨询记录
import MyClientConversation from './src/MyClientConversation';
// 添加会话咨询记录-下次回访提醒
// import MyClientConversationPicker from './src/ConversationPicker';
// 选择咨询方式
import MyClientChoice from './src/MyClientChoice';
// 添加标签
import MyClientLabel from './src/MyClientLabel';

/**
 * 客户列表 页面文件引用部分
 */
// 手动新增客户
import CustomerListAdd from './src/CustomerListAdd';
// 完善客户信息-地址
import CustomerListAddress from './src/CustomerListAddress';








/**
 * 组件引用部分
 */
import { AppRegistry } from 'react-native';


/**
 * 渲染内容操作
 */
AppRegistry.registerComponent('MyApp', () => CustomerListAddress);
