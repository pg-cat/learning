import * as TYPES from './types'
import state from './state';

const mutations = {
  [TYPES.SET_COUNT_ADD](state, n) {
    state.count = state.count + n
  },
  [TYPES.SET_COUNT_REM](state, n) {
    state.count = state.count - n
  }
}

export default mutations
