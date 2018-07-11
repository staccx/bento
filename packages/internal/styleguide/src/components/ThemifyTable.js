import React from "react"
import { Table, Heading } from "@staccx/base"

export default ({ data }) => {
  return (
    <div>
      <Heading level="3" variant="documentationAttrs">
        Themify
      </Heading>
      <Table data={data} variant="propsDescription">
        {({ item }) => (
          <React.Fragment>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.type}</td>
          </React.Fragment>
        )}
      </Table>
    </div>
  )
}
