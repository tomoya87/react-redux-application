import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'
import { Link } from 'react-router-dom'

// import { readEvents } from '../actions'
import { readEvents } from '../actions'
// import PropTypes from 'prop-types';

// class App extends Component {
//   render() {
//     return React.createElement(
//       "div",
//       null,
//       "Hello, wprld!!!!"
//     )
//   }
// }

// JSXでの構文
// JSではclassだが被るためReactではclassNameの文法
// class App extends Component {
//   render() {
//     // const greeting = "｛埋め込むこともできる｝";
//     // const dom = <h1>こんな書き方もできる</h1>returnで返す
//     // 1つのタグじゃないとコンパイルエラー
//     // 余計なタグをつけないためには<React.Fragment>を使うと一つのタグとみなされる
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onClick={() => { alert("クリックしました") }} />
//       </React.Fragment>
//     )
//   }
// }

class EventsIndex extends Component {
  componentDidMount() {
    // console.log('Hi')
    this.props.readEvents();
  }
  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }
  render() {

    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>

          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>

        <Link to="/events/new">New Event</Link>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })
// ショートハンドの構文
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
