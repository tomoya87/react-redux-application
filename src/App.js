import React from 'react';

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
const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "nanako" }
  ]
  return <div>
    {
      profiles.map((profiles, index) => {
        return <User name={profiles.name} age={profiles.age} key={index} />
      })
    }

  </div>
}
const User = (props) => {
  return <div>Hi!, I am {props.name},and {props.age} years old!</div>
}
User.defaultProps = {
  age: 1
}
export default App;
