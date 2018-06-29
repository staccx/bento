import React from "react"
import { Table } from "@staccx/base"

const MethodAttrs = ({ attributes }) => {
  return (
    <Table data={attributes} variant="documentationAttr">
      {({ value }) => (
        <td>
          <h3>{value.name ? value.name : value}</h3>
          <span>{value.type ? value.type : value}</span>
        </td>
      )}
    </Table>
  )
}

export default MethodAttrs
