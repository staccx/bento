import React from "react"
import styled from "styled-components"
import { theming, Image, ThemeComponent } from "@staccx/base"

const TableRow = ({
  onClick,
  indicator,
  status,
  updated,
  current,
  threshold,
  id,
  expanded
}) => {
  return (
    <Body expanded={expanded}>
      <DataRow onClick={() => onClick()}>
        <td>{indicator}</td>
        <td>
          {status >= 1 ? (
            <ThemeComponent tagName={"Bull"} fallback={null} />
          ) : (
            <ThemeComponent tagName={"Bear"} fallback={null} />
          )}
        </td>
        <td>
          <NoBreak>{updated}</NoBreak>
        </td>
        <td>{current}</td>
        <td>{threshold}</td>
        <td>
          <ThemeComponent tagName={"Caret"} fallback={null} />
        </td>
      </DataRow>
      {expanded && (
        <ExpandedRow>
          <td colSpan="6">
            <StyledImage
              src={`https://quantfolio-5b43.restdb.io/media/${id}`}
              alt={"image"}
            />
          </td>
        </ExpandedRow>
      )}
    </Body>
  )
}

const Body = styled.tbody`
  background-color: ${p =>
    p.expanded ? theming.color("subtleHover") : theming.color("white")};

  &:nth-of-type(even) {
    background-color: ${p =>
      p.expanded ? theming.color("subtleHover") : theming.color("grayXLight")};
  }

  tr:first-child {
    cursor: pointer;

    &:hover {
      background-color: ${p =>
        p.expanded
          ? theming.color("subtleHoverDark")
          : theming.color("subtleHover")};
    }
  }
`

const DataRow = styled.tr`
  td {
    padding: ${theming.spacing.small} ${theming.spacing.small};

    &:nth-last-child(-n + 4) {
      text-align: right;
    }

    &:nth-child(2) {
      text-align: center;
    }

    &:last-child {
      text-align: center;
    }
  }
`

const ExpandedRow = styled.tr`
  background-color: ${theming.color("dark")};

  td {
    padding: ${theming.spacing.medium};
  }
`

const NoBreak = styled.span`
  white-space: nowrap;
`

const StyledImage = styled(Image)`
  display: block;
  margin: 0 auto;
  max-width: 504px;
`

export default TableRow
