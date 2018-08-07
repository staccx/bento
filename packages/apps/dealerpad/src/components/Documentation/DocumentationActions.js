import React from "react"
import { ThemeComponent } from "@staccx/theme"
import { Button, FileInput } from "@staccx/base"
import fileStatus from "../../data/fileStatus"

const DocumentationIcon = ({ status }) => {
  switch (status) {
    case fileStatus.empty:
      return (
        <div>
          <FileInput
            id="1243rwtgfh"
            onChange={() => console.log("You changed it")}
          >
            Last opp
          </FileInput>
        </div>
      )
    case fileStatus.uploaded:
      return (
        <div>
          <Button variant="icon">
            <ThemeComponent tagName="DocumentationDownload" />
          </Button>
          <Button variant="icon">
            <ThemeComponent tagName="DocumentationTrash" />
          </Button>
        </div>
      )
    case fileStatus.approved:
      return (
        <Button variant="icon">
          <ThemeComponent tagName="DocumentationDownload" />
        </Button>
      )
    case fileStatus.rejected:
      return (
        <div>
          <FileInput
            id="idjadsj"
            onChange={() => console.log("You changed it")}
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
