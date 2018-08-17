import React, { Component } from "react"
import { Button } from "@staccx/base"
import { color, spacing } from "@staccx/theme"
import styled from "styled-components"
import InvoiceItemsItem from "./InvoiceItems.Item"
import InvoiceCalculation from "../InvoiceCalculation/InvoiceCalculation"

class InvoiceItems extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lines: [
        {
          id: 0,
          product: null,
          price: null,
          vatRate: 0.25,
          number: 1,
          amount: null
        }
      ] // FIXME: Improve this with data for each line-item
    }
    this.addLine = this.addLine.bind(this)
    this.generateUniqueKey = this.generateUniqueKey.bind(this)
    this.handleProductChange = this.handleProductChange.bind(this)
    this.handlePriceChange = this.handlePriceChange.bind(this)
    this.handleNumberChange = this.handleNumberChange.bind(this)
    this.getAmount = this.getAmount.bind(this)
    this.calculateTotal = this.calculateTotal.bind(this)
  }

  calculateTotal(lines) {
    const net = lines.reduce((accumulator, line) => {
      return accumulator + line.price * line.number
    }, 0)
    const vat = lines.reduce((accumulator, line) => {
      return accumulator + line.price * line.number * line.vatRate
    }, 0)

    return {
      net,
      vat,
      discount: 0
    }
  }

  generateUniqueKey(lines) {
    const lastElementId = lines[lines.length - 1].id
    return lastElementId + 1
  }

  addLine() {
    this.setState({
      lines: [
        ...this.state.lines,
        {
          id: this.generateUniqueKey(this.state.lines),
          product: null,
          price: null,
          number: 1,
          amount: null
        }
      ]
    })
  }

  handleProductChange(id, value) {
    let items = [...this.state.lines]
    items.map(item => item.id === id && (item.product = value))
    this.setState({ lines: items })
  }

  handlePriceChange(id, event) {
    const value = event.target.value
    let items = [...this.state.lines]
    items.map(item => item.id === id && (item.price = parseInt(value, 10)))
    this.setState({ lines: items })
  }

  handleNumberChange(id, event) {
    const value = event.target.value
    let items = [...this.state.lines]
    items.map(item => item.id === id && (item.number = value))
    this.setState({ lines: items })
  }

  getAmount(id) {
    const currentItem = this.state.lines.filter(item => item.id === id)

    return !isNaN(
      parseInt(currentItem[0].price, 10) * parseInt(currentItem[0].number, 10)
    )
      ? parseInt(currentItem[0].price, 10) * parseInt(currentItem[0].number, 10)
      : 0
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
              <InvoiceItemsItem
                id={item.id}
                product={item.product}
                handleProductChange={this.handleProductChange}
                price={item.price}
                handlePriceChange={this.handlePriceChange}
                number={item.number}
                handleNumberChange={this.handleNumberChange}
                amount={this.getAmount(item.id)}
                key={item.id}
              />
            ))}
          </TableBody>
        </Table>
        <Footer>
          <div>
            <Button onClick={() => this.addLine()}>Legg til</Button>
          </div>
          <InvoiceCalculation sums={this.calculateTotal(this.state.lines)} />
        </Footer>
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
    padding-right: ${spacing.small};
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

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`

export default InvoiceItems
