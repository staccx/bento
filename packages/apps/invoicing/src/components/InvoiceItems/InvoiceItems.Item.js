import React from "react"
import { Input, Select, theming } from "@staccx/base"
import styled from "styled-components"

const InvoiceItemsItem = ({
  id,
  handleProductChange,
  handlePriceChange,
  handleNumberChange,
  amount
}) => (
  <TableRow>
    <td>
      <Select
        id={"invoiceLineDesc" + id}
        placeholder="Beskrivelse"
        variant="invoiceLine"
        items={[
          "Isola Takshingel",
          "Isola AirGuard® Smart",
          "Zanda Protector betongtakstein"
        ]}
        onChange={value => handleProductChange(id, value)}
        combobox
      />
    </td>
    <td>
      <Input
        id={"invoiceLinePrice" + id}
        placeholder="0"
        onChange={event => handlePriceChange(id, event)}
        variant="invoiceLine"
      />
    </td>
    <td>
      <Input
        id={"invoiceLineNumber" + id}
        placeholder="0"
        defaultValue={1}
        onChange={event => handleNumberChange(id, event)}
        variant="invoiceLine"
      />
    </td>
    <td>{parseFloat(amount).toFixed(2)}</td>
  </TableRow>
)

const TableRow = styled.tr`
  background-color: white;

  &:first-child > td:first-child {
    border-top-left-radius: 5px;
  }
  &:first-child > td:last-child {
    border-top-right-radius: 5px;
  }
  &:last-child > td:first-child {
    border-bottom-left-radius: 5px;
  }
  &:last-child > td:last-child {
    border-bottom-right-radius: 5px;
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${theming.color.line};
  }

  > td:not(:first-child) {
    width: 140px;
  }

  > td:last-child {
    text-align: right;
    padding-right: ${theming.spacing.small};
  }
`

export default InvoiceItemsItem
