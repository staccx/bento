import { Theme } from "@staccx/theme"
import StyrkeTheme from "@staccx/styrke-theme"
import FunduTheme from "@staccx/fundu-theme"

const styrkeTheme = new Theme(StyrkeTheme, {})
const funduTheme = new Theme(FunduTheme, {})

export const ThemeStyrke = styrkeTheme.get
export const ThemeFundu = funduTheme.get
