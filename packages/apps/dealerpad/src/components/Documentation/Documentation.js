import React from "react"
import styled from "styled-components"
import { color, spacing, font } from "@staccx/theme"
import { fontSmoothing } from "@staccx/base"
import DocumentationIcon from "./DocumentationIcon"
import DocumentationActions from "./DocumentationActions"
import fileStatus from "../../data/fileStatus"

const Documentation = ({ label, status }) => (
  <File>
    <DocumentationIcon status={status} />
    <Label>
      {label}
      {status === fileStatus.rejected && <Rejected>Avvist</Rejected>}
    </Label>
    <DocumentationActions status={status} />
  </File>
)

const File = styled.div`
  background-color: ${color.white};
  padding: ${spacing.tiny} ${spacing.tiny} ${spacing.tiny} ${spacing.medium};
  font-size: ${font.small};
  border-bottom: 1px solid ${color.bg};
  display: grid;
  grid-template-columns: 24px 1fr auto;
  grid-column-gap: ${spacing.small};
  align-items: center;
  ${fontSmoothing};
`

const Label = styled.div`
  line-height: 1;
`

const Rejected = styled.div`
  font-size: ${font.tiny};
  color: ${color("a1")};
  margin-top: 3px;
`

export default Documentation
