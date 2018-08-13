import React from "react"
import { Table, Heading, Flag } from "@staccx/base"
import Component from "../components/Icons/Component"
import Css from "../components/Icons/Css"

export default ({ data }) => {
  if (data.length === 0) {
    return null
  }

  return (
    <div>
      <Heading level="3" variant="documentationAttrs">
        Themify
      </Heading>
      <Table
        data={data}
        blacklist={item => item !== "type"}
        variant="propsDescription"
        overrideHeaders={["name", "description"]}
      >
        {({ item }) => {
          console.log(item)
          return (
            <React.Fragment>
              <td>
                {item.prop.type === "component" && (
                  <Flag tiny img={<Component />}>
                    {`${item.componentName}.themeProps.${item.name}`}
                  </Flag>
                )}
                {item.prop.type === "style" && (
                  <Flag tiny img={<Css />}>
                    {`${item.componentName}.themeProps.${item.name}`}
                  </Flag>
                )}
              </td>
              <td>{item.prop.description}</td>
            </React.Fragment>
          )
        }}
      </Table>
    </div>
  )
}
