// import zhCN from 'antd/lib/locale-provider/zh_CN';
// import { DatePicker, LocaleProvider } from 'antd';
import { FormattedMessage, IntlProvider, addLocaleData } from 'react-intl';
import zhData from 'react-intl/locale-data/zh';

// import myStyles from './styles.css';
// import Styles from './styles.less';

// import { Button } from 'antd';

// const lang = window.navigator.language;

// export default () => {
//   const hello = lang === 'en-US' ? 'hello world' : '你好';
//   return (
//     <div id='container' className={myStyles.hello}>{hello} +01
//       <div className={Styles.hello}>{hello} +02
//         <div className={Styles.deleted}>{hello} +03</div>
//       </div>
//       <Button type="primary">antd 原始按钮</Button>
//       <span className={Styles['span-ant-btn']}>
//         <Button>非原样式</Button>
//       </span>
//     </div>
//   )
// }

const messages = {
  'helloworld': '你好吗?',
};
addLocaleData(zhData);
export default () => {
  return (
    <IntlProvider locale="zh" messages={messages}>
      <FormattedMessage id="helloworld" />
    </IntlProvider>
  )
}