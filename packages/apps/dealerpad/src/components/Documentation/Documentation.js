import React from "react"
import styled from "styled-components"
import { color, font } from "@staccx/theme"
import { Box } from "@staccx/base"
import DocumentationIcon from "./DocumentationIcon"
import DocumentationActions from "./DocumentationActions"
import fileStatus from "../../data/fileStatus"

const Documentation = ({ document, label, status, history, location }) => {
  return (
    <Box variant="file">
      <DocumentationIcon status={status} />
      <Label>
        {label}
        {status === fileStatus.rejected && <Rejected>Avvist</Rejected>}
      </Label>
      <DocumentationActions
        status={status}
        history={history}
        location={location}
        document={document}
      />
    </Box>
  )
}

const Label = styled.div`
  line-height: 1;
`

const Rejected = styled.div`
  font-size: ${font.tiny};
  color: ${color("a1")};
  margin-top: 3px;
`

export default Documentation
