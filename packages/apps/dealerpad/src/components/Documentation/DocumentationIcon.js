import React from "react"
import styled, { css } from "styled-components"
import { theming, ThemeComponent } from "@staccx/base"
import fileStatus from "../../data/fileStatus"

const DocumentationIcon = ({ status }) => {
  switch (status) {
    case fileStatus.pending:
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
  width: ${theming.spacing.medium};
  height: ${theming.spacing.medium};
  border-radius: ${theming.spacing.small};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Empty = styled.div`
  ${common};
  background-color: ${theming.color("g1")};
`
const Uploaded = styled.div`
  ${common};
  background-color: ${theming.color("a2")};
  svg {
    fill: ${theming.color("b5")};
  }
`

const Approved = styled.div`
  ${common};
  background-color: ${theming.color("a3")};
  svg {
    fill: ${theming.color("white")};
  }
`

const Rejected = styled.div`
  ${common};
  background-color: ${theming.color("a1")};
  svg {
    fill: ${theming.color("white")};
  }
`

export default DocumentationIcon
