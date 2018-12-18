import React from "react"
import { Select, Input, State } from "@staccx/base"

const Citizenship = ({ onChange, ...props }) => {
  console.log(props)
  return (
    <State>
      {({
        set,
        country = props.schema.properties.country.default,
        tin = null
      }) => (
        <div>
          <Select
            items={["Norge", "Danmark"]}
            onChange={country => {
              set({ country })
              onChange({ country, tin })
            }}
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
