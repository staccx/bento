import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { applyVariants, themePropTypes } from "../../theming"

class Table extends React.Component {
  render() {
    const {
      data,
      blacklist,
      mapHeader,
      children,
      variant,
      itemToKey,
      onHeaderClick,
      renderHeader,
      overrideHeaders,
      ...restProps
    } = this.props

    const headers = overrideHeaders
      ? overrideHeaders
          .map(header => ({
            value: header,
            title: header
          }))
          .map(mapHeader)
      : data
          .reduce((acc, current) => {
            Object.keys(current).forEach(key => {
              if (!acc.includes(key)) {
                acc.push(key)
              }
            })

            return acc
          }, [])
          .filter(blacklist)
          .map(header => ({
            value: header,
            title: header
          }))
          .map(mapHeader)

    return (
      <TableStyled variant={variant} {...restProps}>
        <thead>
          <tr>
            {headers.map((item, index) => {
              if (renderHeader) {
                return renderHeader({ item, index })
              }
              return (
                <th
                  key={`thead-${item.value}`}
                  onClick={e => onHeaderClick(e, item)}
                >
                  {item.title}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((item, index) => {
            const key = itemToKey(item)
            return (
              <tr key={`tr-${typeof key === "string" ? key : index}`}>
                {children({ item, headers, index })}
              </tr>
            )
          })}
        </tbody>
      </TableStyled>
    )
  }
}

Table.themeProps = {
  table: {
    name: "base-component-table",
    description: "",
    type: themePropTypes.style
  }
}

export const TableStyled = styled.table`
  ${applyVariants(Table.themeProps.table)};
`

Table.propTypes = {
  blacklist: PropTypes.func,
  children: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  fallbackCellValue: PropTypes.any,
  itemToKey: PropTypes.any,
  mapHeader: PropTypes.func,
  onHeaderClick: PropTypes.func,
  renderHeader: PropTypes.func,
  overrideHeaders: PropTypes.array
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
