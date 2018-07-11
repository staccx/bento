import React from "react"
import { Table, Heading, Flag } from "@staccx/base"
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
                {item.type === "component" && (
                  <Flag tiny img={<Component />}>
                    {item.name}
                  </Flag>
                )}
                {item.type === "style" && (
                  <Flag tiny img={<Css />}>
                    {item.name}
                  </Flag>
                )}
              </td>
              <td>{item.description}</td>
            </React.Fragment>
          )
        }}
      </Table>
    </div>
  )
}
