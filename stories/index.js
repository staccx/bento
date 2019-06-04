import { storiesOf } from "@storybook/react"
import { DOCUMENTATION_ROOT_PATH } from "./utils"
import requirements from "./requirements"

const stories = storiesOf(DOCUMENTATION_ROOT_PATH + "Documentation", module)
requirements(stories)
