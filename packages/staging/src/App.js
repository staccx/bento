import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import {
  ThemeProvider,
  SplitList,
  SplitListItem,
  RadioButton,
  CheckBox,
  CheckGroup,
  Slider,
  SliderKeyboardInput
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

const handleCheckboxChange = value => {
  console.log("You checked " + value)
}

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
            <CheckGroup group="asdasbn" onChange={() => console.log("oyoy")}>
              <RadioButton defaultChecked key="key-jnkqd" id="qwerfasc">
                Roger roger
              </RadioButton>
              <RadioButton key="key-jba" id="12ewdqsn">
                Roger roger
              </RadioButton>
            </CheckGroup>
          </div>
          <div>
            <CheckGroup onChange={handleCheckboxChange} group={"checkboxgroup"}>
              <CheckBox id="asdt43" key="key_vdvsew" value="Alpha">
                Checkbox Alpha
              </CheckBox>
              <CheckBox id="nrff2" key="key_rthjn" value="Bravo">
                Checkbox Bravo
              </CheckBox>
            </CheckGroup>
          </div>
          <div>
            <h3>Naked slider component</h3>
            <Slider name="theSlider" onChange={() => console.log("Slide")} />

            <h3>Slider with input</h3>
            <SliderKeyboardInput
              name="theSlider"
              label="Accessibility label"
              onChange={() => console.log("Slide with input")}
            />
          </div>
        </div>
      </ThemeProvider>
    )
  }
}

export default App
