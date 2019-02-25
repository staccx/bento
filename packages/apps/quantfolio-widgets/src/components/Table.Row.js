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
    <Body>
      <tr onClick={() => onClick()}>
        <td>{indicator}</td>
        <td>
          {status >= 1 ? (
            <ThemeComponent tagName={"Bull"} fallback={null} />
          ) : (
            <ThemeComponent tagName={"Bear"} fallback={null} />
          )}
        </td>
        <td>{updated}</td>
        <td>{current}</td>
        <td>{threshold}</td>
      </tr>
      {expanded && (
        <tr>
          <td colSpan="5">
            <Image
              src={`https://quantfolio-5b43.restdb.io/media/${id}`}
              alt={"image"}
            />
          </td>
        </tr>
      )}
    </Body>
  )
}

const Body = styled.tbody`
  &:nth-of-type(even) {
    background-color: ${theming.color.gray};
  }
`

export default TableRow
