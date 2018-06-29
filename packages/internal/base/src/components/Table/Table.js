import React from "react"
import PropTypes from "prop-types"
import {
  // color,
  // borderRadius,
  // font,
  // fontFamily,
  // fontWeight,
  // spacing,
  // targetSize,
  themify
} from "@staccx/theme"
import styled from "styled-components"

export const TABLE = "base-component-table"

const TableStyled = styled.table`
  ${themify(TABLE)};
`

class Table extends React.Component {
  render() {
    const headers = this.props.data
      .reduce((acc, current) => {
        Object.keys(current).forEach(key => {
          if (!acc.includes(key)) {
            acc.push(key)
          }
        })

        return acc
      }, [])
      .filter(this.props.blacklist)
      .map(header => ({
        value: header,
        title: header
      }))
      .map(this.props.mapHeader)

    return (
      <TableStyled>
        <thead>
          <tr>
            {headers.map((item, index) => {
              if (this.props.renderHeader) {
                return this.props.renderHeader({ item, index })
              }
              return (
                <th
                  key={`thead-${item.value}`}
                  onClick={e => this.props.onHeaderClick(e, item)}
                >
                  {item.title}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((item, index) => {
            const key = this.props.itemToKey(item)
            return (
              <tr key={`tr-${typeof key === "string" ? key : index}`}>
                {this.props.children({ item, headers, index })}
              </tr>
            )
          })}
        </tbody>
      </TableStyled>
    )
  }
}

Table.propTypes = {
  blacklist: PropTypes.func,
  children: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  fallbackCellValue: PropTypes.any,
  itemToKey: PropTypes.any,
  mapHeader: PropTypes.func,
  onHeaderClick: PropTypes.func,
  renderHeader: PropTypes.func
}

export default Table

Table.defaultProps = {
  blacklist: item => item,
  data: [{ name: "one" }, { name: "two", lol: "omg" }],
  fallbackCellValue: "n/a",
  itemToKey: item => item,
  mapHeader: item => item,
  onHeaderClick: console.log
}
