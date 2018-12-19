import React from "react"
import {
  Combobox,
  Input,
  State,
  List,
  Button,
  Box,
  theming
} from "@staccx/base"
import styled, { css } from "styled-components"

const renderOption = (getItemProps, highlightedIndex, selectedItem) => (
  item,
  index
) => (
  <ListItem
    {...getItemProps({
      key: item.code,
      index,
      item
    })}
    selected={selectedItem === item}
    highlighted={highlightedIndex === index}
  >
    {item.name}
  </ListItem>
)

const ListItem = styled.li`
  line-height: 24px;
  padding: ${theming.spacing.small} ${theming.spacing.medium};
  cursor: pointer;
${({ selected }) =>
  selected
    ? css`
        background-color: ${theming.color.primary};
      `
    : null}

${({ highlighted }) =>
  highlighted
    ? css`
        background-color: ${theming.color.primary};
      `
    : null}
  border-bottom: 1px solid ${theming.color.line}40;
`

const renderSelected = (selectedItem, getInputProps, { clearSelection }) => (
  <Box variant={["inlineBox"]}>
    <Input {...getInputProps({ value: selectedItem.name })} />
    <Button variant={["clearButton"]} onClick={clearSelection}>
      X
    </Button>
  </Box>
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
        <Box variant={["inlineBox"]}>
          <Combobox
            variant="schemaFields"
            options={items}
            indexer={"code"}
            filter={["code", "name"]}
            onChange={country => set({ country })}
            renderInput={getInputProps => (
              <Input label={"Land"} {...getInputProps()} />
            )}
            renderLabel={null}
            renderSelected={renderSelected}
            // downshiftProps={{ isOpen: true }}
          >
            {({ result, getItemProps, highlightedIndex, selectedItem }) => (
              <List variant={["combo"]}>
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
            label="TIN"
            required={props.required}
          />
        </Box>
      )}
    </State>
  )
}

export default Citizenship
