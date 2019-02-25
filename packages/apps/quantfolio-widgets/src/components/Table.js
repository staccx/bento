import React, { useState, useEffect } from "react"
import styled from "styled-components"
import ShowMore from "@tedconf/react-show-more"
import sortBy from "lodash.sortby"
import reverse from "lodash.reverse"
import {
  theming,
  Box,
  Heading,
  Button,
  Layout,
  RadioPill,
  RadioPillItem,
  ThemeComponent,
  Loading
} from "@staccx/base"
import TableRow from "./Table.Row"
import SortButton from "./Table.SortButton"
import theme from "../theme"

const filterFunc = filter => item =>
  filter === 0 ? true : item.status === filter

const Table = ({ data = [] }) => {
  const [expandedId, setExpandedId] = useState(null)
  const [sortRow, setSortRow] = useState("indicator")
  const [isReverse, setIsReverse] = useState(false)

  const [filter, setFilter] = useState(0)

  const [dataFiltered, setData] = useState(data)

  const handleSort = row => {
    if (sortRow === row) {
      setIsReverse(!isReverse)
    } else {
      setSortRow(row)
      setIsReverse(false)
    }
  }

  const filterData = () => {
    const func = filterFunc(filter)
    const d = data.filter(item => func(item))
    const sorted = sortBy(d, sortRow)

    setData(isReverse ? reverse(sorted) : sorted)
  }

  useEffect(() => {
    filterData()
  }, [filter, data, sortRow, isReverse])

  if (dataFiltered.length === 0) {
    return (
      <Loading
        variant={"finger"}
        idleTime={0}
        color={theming.color.primary()({ theme })}
      />
    )
  }
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
                    <SortButton
                      label={"Indicator"}
                      name={"indicator"}
                      isReverse={isReverse}
                      sortRow={sortRow}
                      onClick={handleSort}
                    />
                  </th>
                  <th>
                    <SortButton
                      label={"Status"}
                      name={"status"}
                      isReverse={isReverse}
                      sortRow={sortRow}
                      onClick={handleSort}
                    />
                  </th>
                  <th>
                    <SortButton
                      label={"Updated"}
                      name={"updated"}
                      isReverse={isReverse}
                      sortRow={sortRow}
                      onClick={handleSort}
                    />
                  </th>
                  <th>
                    <SortButton
                      label={"Current"}
                      name={"current"}
                      isReverse={isReverse}
                      sortRow={sortRow}
                      onClick={handleSort}
                    />
                  </th>
                  <th>
                    <SortButton
                      label={"Threshold"}
                      name={"threshold"}
                      isReverse={isReverse}
                      sortRow={sortRow}
                      onClick={handleSort}
                    />
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
