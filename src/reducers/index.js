import { combineReducers } from 'redux'
import events from './events'

export default combineReducers({ events })
// このように複数くわえれる
// export default combineReducers({ foo  ,bar ,baz})