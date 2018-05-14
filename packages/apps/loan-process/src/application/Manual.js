import React from "react"
import Loadable from "react-loadable"
import showLoadingMessage from "../../utils/showLoadingMessage"

export const ContentBlock = Loadable({
  loader: () => import("../cms/contentBlock"),
  loading: () => showLoadingMessage("Loading contentblock")
})

const Manual = () => (
  <ContentBlock blockRef={"473e9ab8-1093-4de2-9e02-b214cdb69e75"} />
)

export default Manual
