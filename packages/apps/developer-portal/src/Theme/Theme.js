import { theming } from "@staccx/base"
import { FunduTheme, FunduDocsTheme } from "@staccx/fundu-theme"

const theme = new theming.Theme(FunduTheme).add(FunduDocsTheme)
export default theme
