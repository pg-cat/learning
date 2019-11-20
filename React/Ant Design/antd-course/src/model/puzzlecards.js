import request from '../util/request';
import { message } from 'antd';

// const delay = (millisecond) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, millisecond);
//   })
// }

export default {
  namespace: 'puzzlecards',
  state: {
    data: [],
    counter: 0
  },
  effects: {
    *queryInitCards(_, sagaEffects) {
      const { call, put } = sagaEffects;
      const endPointURI = '/dev/random_joke';

      // 加入 try catch 捕获抛错
      try{
        const puzzle = yield call(request, endPointURI);
        yield put({ type: 'addNewCard', payload: puzzle });

        // yield call(delay, 1000);

        const puzzle2 = yield call(request, endPointURI);
        yield put({ type: 'addNewCard', payload: puzzle2 });

        // yield call(delay, 1000);

        const puzzle3 = yield call(request, endPointURI);
        yield put({ type: 'addNewCard', payload: puzzle3 })
      } catch(e){
        // 打印错误信息
        message.error('数据获取失败，请查看网络是否正常')
      }
    },
    *queryInitButton(_, sagaEffects){
      const { call, put } = sagaEffects;
      const endPointURI = '/dev/random_joke';

      // 加入 try catch 捕获抛错
      try{
        const puzzle = yield call(request, endPointURI);
        yield put({ type: 'addNewCard', payload: puzzle })
      } catch(e){
        // 打印错误信息
        message.error('数据获取失败，请稍候重试')
      }
    }
  },
  reducers: {
    addNewCard(state, { payload: newCard }) {
      const nextCounter = state.counter + 1;
      const newCardWithId = { ...newCard, id: nextCounter };
      const nextData = state.data.concat(newCardWithId);
      return {
        data: nextData,
        counter: nextCounter
      }
    }
  }
}