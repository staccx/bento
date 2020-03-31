import { themePropTypes } from "../../../theming"
import messageLoaderThemeProps from "../MessageLoader/MessageLoader.themeProps"

const themeProps = {
  mainContainer: {
    name: "FULLSCREENLOADER_MAINCONTAINER",
    description: "",
    type: themePropTypes.style
  },
  innerContainer: {
    name: "FULLSCREENLOADER_INNERCONTAINER",
    references: messageLoaderThemeProps.container,
    description: "",
    type: themePropTypes.style
  },
  messagesContainer: {
    name: "FULLSCREENLOADER_MESSAGESCONTAINER",
    references: messageLoaderThemeProps.messagesContainer,
    description: "",
    type: themePropTypes.style
  },
  message: {
    name: "FULLSCREENLOADER_MESSAGESSTYLE",
    references: messageLoaderThemeProps.message,
    description: "",
    type: themePropTypes.style
  },
  previousMessage: {
    name: "FULLSCREENLOADER_PREVIOUSMESSAGE",
    references: messageLoaderThemeProps.previousMessage,
    description: "",
    type: themePropTypes.style
  },
  currentMessage: {
    name: "FULLSCREENLOADER_CURRENTMESSAGE",
    references: messageLoaderThemeProps.currentMessage,
    description: "",
    type: themePropTypes.style
  }
}

export default themeProps
