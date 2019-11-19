import * as TYPES from './types'

const actions = {
  ADD(vuex, n) {
    vuex.commit(TYPES.SET_COUNT_ADD, n)
  },
  REM(vuex, n) {
    vuex.commit(TYPES.SET_COUNT_REM, n)
  }
}

export default actions
