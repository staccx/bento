import React from "react"
import { ThemeComponent } from "@staccx/theme"
import { Button, FileInput } from "@staccx/base"
import fileStatus from "../../data/fileStatus"
import { slideRight } from "../../components/transitions/transitions"

const DocumentationIcon = ({ status, history, location }) => {
  switch (status) {
    case fileStatus.empty:
      return (
        <div>
          <FileInput
            id="1243rwtgfh"
            onChange={e =>
              e.target.validity.valid
                ? history.push({
                    pathname:
                      location.pathname.slice(-1) === "/"
                        ? location.pathname + "checkimg"
                        : location.pathname + "/checkimg",
                    state: slideRight
                  })
                : console.warn("Uploaded file not valid")
            }
            accept={"image/*"}
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
            onChange={e =>
              e.target.validity.valid
                ? history.push({
                    pathname:
                      location.pathname.slice(-1) === "/"
                        ? location.pathname + "checkimg"
                        : location.pathname + "/checkimg",
                    state: slideRight
                  })
                : console.warn("Uploaded file not valid")
            }
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
