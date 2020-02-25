import { themePropTypes, createVariantsFunctionFactory } from "../../../theming"

const themeProps = {
  container: {
    name: "MESSAGELOADER_INNERCONTAINER",
    description: "",
    type: themePropTypes.style
  },
  messagesContainer: {
    name: "MESSAGELOADER_MESSAGESCONTAINER",
    description: "",
    type: themePropTypes.style
  },
  message: {
    name: "MESSAGELOADER_MESSAGESSTYLE",
    description: "",
    type: themePropTypes.style
  },
  previousMessage: {
    name: "MESSAGELOADER_PREVIOUSMESSAGE",
    description: "",
    type: themePropTypes.style
  },
  currentMessage: {
    name: "MESSAGELOADER_CURRENTMESSAGE",
    description: "",
    type: themePropTypes.style
  }
}

export default createVariantsFunctionFactory(themeProps)
