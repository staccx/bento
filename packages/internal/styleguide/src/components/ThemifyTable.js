import React from "react"
import { Table, Heading, Flag, CopyToClipboardComponent } from "@staccx/base"
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
          let img = null
          switch (item.prop.type) {
            case "component":
              img = <Component />
              break
            case "style":
              img = <Css />
              break
            default:
              break
          }

          const name = `${item.componentName}.themeProps.${item.name}`
          return (
            <React.Fragment>
              <td>
                <CopyToClipboardComponent copyText={name}>
                  <Flag tiny img={img}>
                    {name}
                  </Flag>
                </CopyToClipboardComponent>
              </td>
              <td>{item.prop.description}</td>
            </React.Fragment>
          )
        }}
      </Table>
    </div>
  )
}
