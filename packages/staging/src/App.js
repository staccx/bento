import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import {
  ThemeProvider,
  SplitList,
  SplitListItem,
  RadioButton,
  CheckBox,
  RadioButtonGroup
} from "@staccx/base"

const myList = [
  {
    myUniqueId: "221e98j",
    myLeftProp: 5,
    myRightProp: "ieofnsa"
  },
  {
    myUniqueId: "h14",
    myLeftProp: "wirjfw",
    myRightProp: "lksiadj",
    myThirdProp: "ewkmdsna"
  }
]

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <SplitList>
            {myList.map(listItem => (
              <SplitListItem key={listItem.myUniqueId}>
                {listItem.myLeftProp}
                {listItem.myRightProp}
                {listItem.myThirdProp ? listItem.myThirdProp : null}
              </SplitListItem>
            ))}
          </SplitList>
          <div>
            <RadioButtonGroup
              group="asdasbn"
              onChange={() => console.log("oyoy")}
            >
              <RadioButton defaultChecked key="key-jnkqd" id="qwerfasc">
                Roger roger
              </RadioButton>
              <RadioButton key="key-jba" id="12ewdqsn">
                Roger roger
              </RadioButton>
            </RadioButtonGroup>
          </div>
        </div>
      </ThemeProvider>
    )
  }
}

export default App
