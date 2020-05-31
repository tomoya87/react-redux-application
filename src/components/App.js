import React, { Component } from 'react';
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
const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }

  }
  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 })
  }
  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }
  render() {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;