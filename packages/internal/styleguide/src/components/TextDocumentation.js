import React from "react"
import styled from "styled-components"
import { theming } from "@staccx/base"
const TextDocumentation = ({
  children,
  component,
  themify,
  themifyDescription
}) => (
  <TextDocumentationWrapper>
    <Description>{children}</Description>
    {/* <Props>{component}</Props> */}
    <Themify>
      <SubHeading>Themify</SubHeading>
      <Table>
        {Object.values(themify).map((figure, index) => (
          <TableLine key={figure.name}>
            <TableElement>{figure.name}</TableElement>
            <TableElement>{themifyDescription[index]}</TableElement>
          </TableLine>
        ))}
      </Table>
    </Themify>
  </TextDocumentationWrapper>
)

const Description = styled.div`
  padding: ${theming.spacing.small} 0;
  line-height: 1.4;
`

const TextDocumentationWrapper = styled.div`
  background-color: #f9f7f7;
  padding: ${theming.spacing.medium};
  font-family: ${theming.fontFamily.body};
  border-right: 1px solid #ebe7e7;
`

const SubHeading = styled.h2`
  font-family: ${theming.fontFamily.heading};
  font-size: ${theming.font.h6};
  color: #656b77;
`
const Table = styled.table`
  border: 1px solid #ebe7e7;
  border-collapse: collapse;
  font-family: monospace;
  font-size: ${theming.font.tiny};
  width: 100%;
`

const TableLine = styled.tr`
  &:nth-child(even) {
    background-color: #efeded;
  }
`
const TableElement = styled.td`
  padding: ${theming.spacing.tiny};
  &:last-child {
    color: ${theming.color.primary};
    text-align: right;
  }
`

const Props = styled.div``
const Themify = styled.div``

export default TextDocumentation
