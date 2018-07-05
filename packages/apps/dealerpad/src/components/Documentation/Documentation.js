import React from "react"
import styled from "styled-components"
import { color, spacing, font } from "@staccx/theme"
import { fontSmoothing } from "@staccx/base"
import DocumentationIcon from "./DocumentationIcon"
import DocumentationActions from "./DocumentationActions"

const Documentation = ({ label, status }) => (
  <File>
    <DocumentationIcon status={status} />
    <Label>{label}</Label>
    <DocumentationActions status={status} />
  </File>
)

const File = styled.div`
  background-color: ${color.white};
  padding: ${spacing.tiny} ${spacing.small};
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

export default Documentation
