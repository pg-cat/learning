// 声明一个 state 需要的变量
const gz = 10000;
const bs = 5;

// action 部分
// const add = {
//   type: 'ADD'
// }
// const rem = {
//   type: 'REM'
// }

// reducer
const reducer = (state = { gz, bs }, action) => {
  // 判断并执行 action
  switch (action.type) {
    case 'ADD':
      state.gz += 1000;
      return { ...state };
    case 'REM':
      state.gz -= 100;
      return { ...state };
    case 'CHENG':
      state.bs *= 2;
      return { ...state };
    case 'CHU':
      state.bs /= 3;
      return { ...state };
    default:
      return state;
  }
}

export default reducer;