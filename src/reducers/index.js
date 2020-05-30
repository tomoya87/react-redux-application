import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({ count })
// このように複数くわえれる
// export default combineReducers({ foo  ,bar ,baz})