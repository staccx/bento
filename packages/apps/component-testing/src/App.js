import React, { Component } from "react"
import {
  Wrapper,
  Combobox,
  Input,
  Label,
  Button,
  List,
} from "@staccx/base"
import { ThemeProvider } from "styled-components"
import { BrowserRouter as Router } from "react-router-dom"
import theme from "./theme/Theme"

const options = [
  { value: "apple" },
  { value: "pear" },
  { value: "orange" },
  { value: "grape" },
  { value: "banana" },
  { value: "bananas" },
  { value: "bananas2" }
]

const renderOption = (getItemProps, highlightedIndex, selectedItem) => (
  item,
  index
) => (
  <li
    {...getItemProps({
      key: item.value,
      index,
      item,
      style: {
        backgroundColor: highlightedIndex === index ? "lightgray" : "white",
        fontWeight: selectedItem === item ? "bold" : "normal"
      }
    })}
  >
    {item.value}
  </li>
)

const renderInput = getItemProps => <Input {...getItemProps()} />

const renderSelected = (selectedItem, getInputProps, { clearSelection }) => (
  <span>
    <Input {...getInputProps()} />
    <Button onClick={clearSelection}>Clear</Button>
  </span>
)

const renderLabel = getLabelOptions => (
  <Label {...getLabelOptions()}>Fruit</Label>
)

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Wrapper>
            <Combobox
              onChange={console.log}
              renderOption={renderOption}
              renderInput={renderInput}
              renderSelected={renderSelected}
              renderLabel={renderLabel}
              listComponent={List}
              filter={"value"}
              options={options}
            />
          </Wrapper>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App
