import React, { Component } from "react"
import {
  Wrapper,
  Combobox,
  GlobalStyle,
  WebFonts,
  Input,
  Label,
  Button,
  List,
  CreditCardInput,
  PhoneInput,
  PostalCodeInput,
  NationalIdInput,
  AccountInput,
  CurrencyInput,
  Select2,
  Select,
  CompanyInput
} from "@staccx/base"
import { ThemeProvider } from "styled-components"
import { BrowserRouter as Router } from "react-router-dom"
import theme from "./theme/Theme"

const options = [
  { value: "apple", misc: "cool" },
  { value: "pear", misc: "Ermagerdh" },
  { value: "orange", misc: "Ermagerdh" },
  { value: "grape", misc: "Ermagerdh" },
  { value: "banana", misc: "Ermagerdh" },
  { value: "bananas", misc: "Ermagerdh" },
  { value: "bananas2", misc: "Ermagerdh" },
  { value: "coolio", misc: "Ermagerdh" }
]

const renderOption = (getItemProps, highlightedIndex, selectedItem) => (
  item,
  index
) => {
  return (
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
}

const renderInput = getItemProps => (
  <Input placeholder={"input here"} {...getItemProps()} />
)

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
            <GlobalStyle />
            <WebFonts />
            <CompanyInput id={"test"} />
            <Select
              items={options}
              itemToString={item => item.value}
              itemToKey={item => item.value}
              placeHolderLabel={"Velg..."}
              onChange={() => null}
            />
            <Combobox
              onChange={console.log}
              renderInput={renderInput}
              renderSelected={renderSelected}
              renderLabel={renderLabel}
              listComponent={List}
              filter={["value", "misc"]}
              indexer={"value"}
              options={options}
              initialSelectedItem={options[1]}
            >
              {({ result, getItemProps, highlightedIndex, selectedItem }) => (
                <List>
                  {result.map(
                    renderOption(getItemProps, highlightedIndex, selectedItem)
                  )}
                </List>
              )}
            </Combobox>
            <Select2
              options={options}
              renderSelected={(selectedItem, getToggleButtonProps) => (
                <Button {...getToggleButtonProps()}>
                  {selectedItem.value}
                </Button>
              )}
              renderLabel={renderLabel}
              renderPlaceholder={getToggleButtonProps => (
                <Button {...getToggleButtonProps()}>Velg...</Button>
              )}
              onChange={console.log}
            >
              {({ selectedItem, options, getItemProps, highlightedIndex }) => {
                return (
                  <List>
                    {options.map(
                      renderOption(getItemProps, highlightedIndex, selectedItem)
                    )}
                  </List>
                )
              }}
            </Select2>
            <CreditCardInput label={"Credit Card"} />
            <PhoneInput label={"Phone number"} onChange={console.warn} />
            <NationalIdInput label={"National Id"} id={"tsa"} />
            <PostalCodeInput label={"Postal code"} onChange={console.log} />
            <AccountInput label={"Account number"} />
            <CurrencyInput label={"Currency"} />
          </Wrapper>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App
