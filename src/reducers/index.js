import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import events from './events'

export default combineReducers({ events, form })
// このように複数くわえれる
// export default combineReducers({ foo  ,bar ,baz})