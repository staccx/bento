import React from "react"
import { Table, Heading } from "@staccx/base"
import Component from "../components/Icons/Component"
import Css from "../components/Icons/Css"

export default ({ data }) => {
  return (
    <div>
      <Heading level="3" variant="documentationAttrs">
        Themify
      </Heading>
      <Table
        data={data}
        blacklist={item => item !== "type"}
        variant="propsDescription"
      >
        {({ item }) => {
          console.log(item)
          return (
            <React.Fragment>
              <td>
                {item.type === "component" && <Component />}
                {item.type === "style" && <Css />}
                {item.name}
              </td>
              <td>{item.description}</td>
            </React.Fragment>
          )
        }}
      </Table>
    </div>
  )
}
