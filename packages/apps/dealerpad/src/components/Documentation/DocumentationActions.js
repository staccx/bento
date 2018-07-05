import React from "react"
import { ThemeComponent } from "@staccx/theme"
import { Button } from "@staccx/base"
import fileStatus from "../../data/fileStatus"

const DocumentationIcon = ({ status }) => {
  switch (status) {
    case fileStatus.empty:
      return (
        <Button variant="icon">
          <ThemeComponent tagName="DocumentationUpload" /> Last opp
        </Button>
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
          <Button variant="icon">
            <ThemeComponent tagName="DocumentationUpload" /> Last opp
          </Button>
          <Button variant="icon">
            <ThemeComponent tagName="DocumentationDownload" />
          </Button>
        </div>
      )
  }
}

export default DocumentationIcon
