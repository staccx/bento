import React from "react"
import { Select, Input, State } from "@staccx/base"

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
          <Select
            items={items}
            onChange={country => {
              set({ country })
              onChange({ country, tin })
            }}
            itemToString={item => item.name}
            itemToKey={item => item.key}
            placeHolderLabe={"Velg..."}
            initialSelectedItem={country}
          />
          <Input
            placeholder={"TIN"}
            defaultValue={tin}
            onChange={e => {
              set({ tin: e.target.value })
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
