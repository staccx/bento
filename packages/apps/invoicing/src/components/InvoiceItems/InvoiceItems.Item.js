import React from "react"
import { Input, CurrencyInput } from "@staccx/base"
import { color } from "@staccx/theme"
import styled from "styled-components"

const InvoiceItemsItem = () => (
  <TableRow>
    <td>
      <Input
        id="invoiceLineDesc"
        placeholder="Beskrivelse"
        variant="invoiceLine"
        first
      />
    </td>
    <td>
      <Input id="invoiceLinePrice" placeholder="0" variant="invoiceLine" />
    </td>
    <td>
      <Input
        id="invoiceLineNumber"
        placeholder="0"
        defaultValue={1}
        variant="invoiceLine"
      />
    </td>
    <td>
      <CurrencyInput
        id="invoiceLineAmount"
        placeholder="0"
        variant="invoiceLine"
      />
    </td>
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
    border-bottom: 1px solid ${color.line};
  }

  > td:not(:first-child) {
    width: 140px;
  }
`

export default InvoiceItemsItem
