import React from "react"
import { Select, Combobox, Input, State, List, Button } from "@staccx/base"

const renderOption = (getItemProps, highlightedIndex, selectedItem) => (
  item,
  index
) => (
  <li
    {...getItemProps({
      key: item.code,
      index,
      item,
      style: {
        backgroundColor: highlightedIndex === index ? "lightgray" : "white",
        fontWeight: selectedItem === item ? "bold" : "normal",
        height: 64
      }
    })}
  >
    {item.name}
  </li>
)

const renderSelected = (selectedItem, getInputProps, { clearSelection }) => (
  <span>
    <Input {...getInputProps({ value: selectedItem.name })} />
    <Button onClick={clearSelection}>Clear</Button>
  </span>
)

const Citizenship = ({ onChange, registry, ...props }) => {
  const { definitions = {} } = registry
  const { country } = definitions
  const items = country.properties.code.enum.map((code, index) => ({
    code,
    name: country.properties.label.enum[index]
  }))

  return (
    <State>
      {({
        set,
        country = props.schema.properties.country.default,
        tin = null
      }) => (
        <div>
          <Combobox
            options={items}
            indexer={"code"}
            filter={["code", "name"]}
            onChange={country => set({ country })}
            renderInput={getInputProps => <Input label={"Land"} {...getInputProps()} />}
            renderLabel={null}
            renderSelected={renderSelected}
          >
            {({ result, getItemProps, highlightedIndex, selectedItem }) => (
              <List>
                {result.map(
                  renderOption(getItemProps, highlightedIndex, selectedItem)
                )}
              </List>
            )}
          </Combobox>
          <Input
            placeholder={"TIN"}
            defaultValue={tin}
            onChange={e => {
              const tin = e.target.value
              set({ tin })
              onChange({ country, tin })
            }}
            required={props.required}
          />
        </div>
      )}
    </State>
  )
}

export default Citizenship
