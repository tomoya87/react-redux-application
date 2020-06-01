import _ from 'lodash'
import {
    CREATE_EVENT,
    READ_EVENTS,
    READ_EVENT,
    UPDATA_EVENT,
    DELETE_EVENT
} from '../actions'


export default (events = {}, action) => {
    switch (action.type) {
        case CREATE_EVENT:
        case READ_EVENT:
        case UPDATA_EVENT:
            const data = action.response.data
            // console.log(action.response.data)
            // { id: 9, title: "Let's have an event 9!", body: "This is the body for event 9." }
            return { ...events, [data.id]: data }
        case READ_EVENTS:
            // console.log(action.response.data)
            return _.mapKeys(action.response.data, 'id')
        case DELETE_EVENT:
            // console.log(action.id)
            delete events[action.id]
            // スプレっと演算子
            return { ...events }
        default:
            return events
    }
}
