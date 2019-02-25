import React, { useState } from "react"
import styled from "styled-components"
import { theming, Box, Heading, Image } from "@staccx/base"

const Table = ({ data = [] }) => {
  const [id, setId] = useState(null)

  return (
    <Box>
      <Heading>Macro Table</Heading>
      {id && (
        <Image
          src={`https://quantfolio-5b43.restdb.io/media/${id}`}
          alt={"image"}
        />
      )}
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
          {data.map(entry => (
            <tr onClick={() => setId(entry.id)}>
              <td>{entry.indicator}</td>
              <td>{entry.status}</td>
              <td>c</td>
              <td>d</td>
              <td>d</td>
            </tr>
          ))}
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
