import React, { useState, useEffect } from "react"
import styled from "styled-components"
import ShowMore from "@tedconf/react-show-more"
import {
  theming,
  Box,
  Heading,
  Button,
  Layout,
  RadioPill,
  RadioPillItem,
  ThemeComponent
} from "@staccx/base"
import TableRow from "./Table.Row"
import SortButton from "./Table.SortButton"

const filterFunc = filter => item =>
  filter === 0 ? true : item.status === filter

const Table = ({ data = [] }) => {
  const [expandedId, setExpandedId] = useState(null)

  const [filter, setFilter] = useState(0)
  const [dataFiltered, setData] = useState(data)

  const filterData = () => {
    const func = filterFunc(filter)
    const d = data.filter(item => func(item))
    setData(d)
  }

  useEffect(() => {
    console.log("called")
    filterData()
  }, [filter, data])

  return (
    <Box>
      <Heading>Macro Table</Heading>

      <RadioPill
        onChange={e => {
          setFilter(parseInt(e.target.value, 10))
        }}
        group={"filter"}
      >
        <RadioPillItem value={0} defaultChecked id={"all"}>
          All
        </RadioPillItem>
        <RadioPillItem value={1} id={"bull"}>
          <ThemeComponent tagName={"Bull"} fallback={null} />
        </RadioPillItem>
        <RadioPillItem value={-1} id={"bear"}>
          <ThemeComponent tagName={"Bear"} fallback={null} />
        </RadioPillItem>
      </RadioPill>

      <ShowMore items={dataFiltered} by={10}>
        {({ current, onMore }) => (
          <Layout>
            <StyledTable>
              <thead>
                <HeadRow>
                  <th>
                    <SortButton label={"Indicator"} active />
                  </th>
                  <th>
                    <SortButton label={"Status"} />
                  </th>
                  <th>
                    <SortButton label={"Updated"} />
                  </th>
                  <th>
                    <SortButton label={"Current"} />
                  </th>
                  <th>
                    <SortButton label={"Threshold"} />
                  </th>
                  <th />
                </HeadRow>
              </thead>
              {current.map(entry => (
                <TableRow
                  onClick={() =>
                    expandedId === entry.id
                      ? setExpandedId(null)
                      : setExpandedId(entry.id)
                  }
                  indicator={entry.indicator}
                  status={entry.status}
                  updated={entry.date.toLocaleDateString()}
                  current={entry.current}
                  threshold={entry.threshold}
                  id={entry.id}
                  expanded={expandedId === entry.id}
                  key={entry.id}
                />
              ))}
            </StyledTable>

            <StyledButton
              disabled={!onMore}
              onClick={() => {
                if (onMore) onMore()
              }}
            >
              Show more
            </StyledButton>
          </Layout>
        )}
      </ShowMore>
    </Box>
  )
}

const StyledButton = styled(Button)`
  &:disabled {
    background-color: ${theming.color.disabled};
  }
`

const StyledTable = styled.table`
  width: 100%;
  font-family: ${theming.fontFamily.body};
  border-spacing: 0;

  > thead {
    font-weight: bold;
  }
`

const HeadRow = styled.tr`
  th {
    padding: ${theming.spacing.small} ${theming.spacing.small};

    &:nth-last-child(-n + 4) {
      text-align: right;
    }

    &:first-child {
      text-align: left;
    }
  }
`

export default Table
