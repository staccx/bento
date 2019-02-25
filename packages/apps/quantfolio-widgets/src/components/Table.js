import React, { useState } from "react"
import styled from "styled-components"
import { theming, Box, Heading, Image } from "@staccx/base"
import TableRow from "./Table.Row"

const Table = ({ data = [] }) => {
  const [expandedId, setExpandedId] = useState(null)

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
            <td>Threshold</td>
          </tr>
        </thead>
        {data.map(entry => (
          <TableRow
            onClick={() =>
              expandedId === entry.id
                ? setExpandedId(null)
                : setExpandedId(entry.id)
            }
            indicator={entry.indicator}
            status={entry.status}
            updated={"Missing data"}
            current={0}
            threshold={0}
            id={entry.id}
            expanded={expandedId === entry.id}
            key={entry.id}
          />
        ))}
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
