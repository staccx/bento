```javascript
import React from "react"
import { Button, Combobox, Input, Label, List, } from "@staccx/base"

const options = [
  {value: "apple"},
  {value: "pear"},
  {value: "orange"},
  {value: "grape"},
  {value: "banana"},
  {value: "bananas"},
  {value: "bananas2"}
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

const renderSelected = (selectedItem, getInputProps, {clearSelection}) => (
  <span>
    <Input {...getInputProps()} />
    <Button onClick={clearSelection}>Clear</Button>
  </span>
)

const renderLabel = getLabelOptions => (
  <Label {...getLabelOptions()}>Fruit</Label>
)

export default () =>  <Combobox
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
                                 </Combobox>gs
                                 
)


```