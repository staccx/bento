import React from "react"
import styled, { css } from "styled-components"
import { color, spacing, ThemeComponent } from "@staccx/theme"
import fileStatus from "../../data/fileStatus"

const DocumentationIcon = ({ status }) => {
  switch (status) {
    case fileStatus.empty:
      return <Empty />
    case fileStatus.uploaded:
      return (
        <Uploaded>
          <ThemeComponent tagName="DocumentationUploaded" />
        </Uploaded>
      )
    case fileStatus.approved:
      return (
        <Approved>
          <ThemeComponent tagName="DocumentationApproved" />
        </Approved>
      )
    case fileStatus.rejected:
      return (
        <Rejected>
          <ThemeComponent tagName="DocumentationRejected" />
        </Rejected>
      )
    default:
      return null
  }
}

const common = css`
  width: ${spacing.medium};
  height: ${spacing.medium};
  border-radius: ${spacing.small};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Empty = styled.div`
  ${common};
  background-color: ${color("g1")};
`
const Uploaded = styled.div`
  ${common};
  background-color: ${color("a2")};
  svg {
    fill: ${color("b5")};
  }
`

const Approved = styled.div`
  ${common};
  background-color: ${color("a3")};
  svg {
    fill: ${color("white")};
  }
`

const Rejected = styled.div`
  ${common};
  background-color: ${color("a1")};
  svg {
    fill: ${color("white")};
  }
`

export default DocumentationIcon
