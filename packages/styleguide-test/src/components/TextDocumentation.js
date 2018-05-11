import React from "react"
import styled from "styled-components"
import { fontFamily, font, spacing } from "@staccx/theme"

const TextDocumentation = ({ children, component, themify }) => {
  console.log(component.propTypes)
  return (
    <TextDocumentationWrapper>
      <Description>{children}</Description>
      {/* <Props>{component}</Props> */}
      <Themify>
        <SubHeading>Themify</SubHeading>
        <Table>
          {Object.values(themify).map(figure => (
            <TableLine key={figure}>
              <TableElement>{figure}</TableElement>
              <TableElement />
            </TableLine>
          ))}
        </Table>
      </Themify>
    </TextDocumentationWrapper>
  )
}

const Description = styled.div`
  padding: ${spacing.small} 0;
  line-height: 1.4;
`

const TextDocumentationWrapper = styled.div`
  background-color: #f9f7f7;
  padding: ${spacing.medium};
  font-family: ${fontFamily.body};
`

const SubHeading = styled.h2`
  font-family: ${fontFamily.heading};
  font-size: ${font.h6};
  color: #656b77;
`
const Table = styled.table`
  border: 1px solid #ebe7e7;
  border-collapse: collapse;
  font-family: monospace;
  font-size: ${font.tiny};
  width: 100%;
`

const TableLine = styled.tr`
  &:nth-child(even) {
    background-color: #efeded;
  }
`
const TableElement = styled.td`
  padding: ${spacing.tiny};
`

const Props = styled.div``
const Themify = styled.div``

export default TextDocumentation
