import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions'
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

class App extends Component {
  render() {
    const props = this.props

    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })
// ショートハンドの構文
const mapDispatchToProps = ({ increment, decrement })

export default connect(mapStateToProps, mapDispatchToProps)(App)
