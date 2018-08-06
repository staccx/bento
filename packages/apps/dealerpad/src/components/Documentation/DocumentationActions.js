import React from "react"
import { ThemeComponent } from "@staccx/theme"
import { Button, FileInput } from "@staccx/base"
import fileStatus from "../../data/fileStatus"

const DocumentationIcon = ({ status }) => {
  switch (status) {
    case fileStatus.empty:
      return (
        <div>
          <Button variant="subtle">Last opp</Button>
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
            group="signer"
            id="idjadsj"
            onChange={() => console.log("You changed it")}
            variant="subtle"
          >
            Last opp
          </FileInput>
          {/* <Button variant="icon">
            <ThemeComponent tagName="DocumentationDownload" />
          </Button> */}
        </div>
      )
    default:
      return null
  }
}

export default DocumentationIcon
