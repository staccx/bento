import React, { Component } from "react"
import { Button } from "@staccx/base"
import { color, spacing } from "@staccx/theme"
import styled from "styled-components"
import InvoiceItemsItem from "./InvoiceItems.Item"

class InvoiceItems extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lines: [{ id: 0 }] // FIXME: Improve this with data for each line-item
    }
    this.addLine = this.addLine.bind(this)
    this.generateUniqueKey = this.generateUniqueKey.bind(this)
  }

  generateUniqueKey(lines) {
    const lastElementId = lines[lines.length - 1].id
    return lastElementId + 1
  }

  addLine() {
    this.setState({
      lines: [
        ...this.state.lines,
        { id: this.generateUniqueKey(this.state.lines) }
      ]
    })
  }

  render() {
    return (
      <div>
        <Table>
          <Thead>
            <tr>
              <th>Vare</th>
              <th>Pris</th>
              <th>Antall</th>
              <th>Beløp</th>
            </tr>
          </Thead>
          <TableBody>
            {this.state.lines.map(item => (
              <InvoiceItemsItem lineId={item.id} key={item.id} />
            ))}
          </TableBody>
        </Table>
        <Button onClick={() => this.addLine()}>Legg til</Button>
      </div>
    )
  }
}

const Table = styled.table`
  width: 100%;
  margin-bottom: ${spacing.medium};
`

const Thead = styled.thead`
  color: ${color.wcag};
  text-align: right;

  th {
    font-weight: normal;
    padding-bottom: ${spacing.small};
  }

  th:first-child {
    text-align: left;
  }
`

const TableBody = styled.tbody`
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  overflow: hidden;
`

export default InvoiceItems
