import React from "react"
import { Link } from "react-router-dom"
import { ThemeComponent } from "@staccx/theme"
import { Button, FileInput } from "@staccx/base"
import fileStatus from "../../data/fileStatus"
import caseStore from "../../data/store/caseStore"

const DocumentationIcon = ({ status, history, location, document }) => {
  switch (status) {
    case fileStatus.pending:
      return (
        <div>
          <FileInput
            id="1243rwtgfh"
            onChange={caseStore.documentSubmitter(document)}
            accept={"image/*"}
          >
            Last opp
          </FileInput>
        </div>
      )
    case fileStatus.uploaded:
      return (
        <div>
          <Link to={document.condition.uri}>
            <Button variant="icon">
              <ThemeComponent tagName="DocumentationDownload" />
            </Button>
          </Link>
          <Button variant="icon">
            <ThemeComponent tagName="DocumentationTrash" />
          </Button>
        </div>
      )
    case fileStatus.approved:
      return (
        <Link to={document.condition.uri}>
          <Button variant="icon">
            <ThemeComponent tagName="DocumentationDownload" />
          </Button>
        </Link>
      )
    case fileStatus.rejected:
      return (
        <div>
          <FileInput
            id="idjadsj"
            onChange={caseStore.documentSubmitter(document)}
            accept={"image/*"}
          >
            Last opp
          </FileInput>
        </div>
      )
    default:
      return null
  }
}

export default DocumentationIcon
