import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { theming, Box, Heading } from "@staccx/base"

const Table = ({ data }) => {
  return (
    <Box>
      <Heading>Macro Table</Heading>
      <StyledTable>
        <thead>
          <tr>
            <td>Indicator</td>
            <td>Status</td>
            <td>Updated</td>
            <td>Current</td>
            <td>Treshhold</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>a</td>
            <td>b</td>
            <td>c</td>
            <td>d</td>
            <td>d</td>
          </tr>
          <tr>
            <td colSpan="5">a</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>a</td>
            <td>b</td>
            <td>c</td>
            <td>d</td>
            <td>d</td>
          </tr>
          <tr>
            <td colSpan="5">a</td>
          </tr>
        </tbody>
      </StyledTable>
    </Box>
  )
}

const StyledTable = styled.table`
  width: 100%;

  > thead {
    font-weight: bold;
  }

  > tbody {
    &:nth-of-type(even) {
      background-color: ${theming.color.gray};
    }
  }
`

export default Table
