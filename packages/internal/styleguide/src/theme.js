import { StaccTheme, StaccDocsTheme } from "@staccx/stacc-theme"
import { theming } from "@staccx/base"

const savingsAdvisorColors = {
  waveSelected0: "#4E616C",
  waveSelected1: "#D4D3C8",
  waveSelected2: "#BEBCB2",
  waveHovered0: "#4B4217",
  waveHovered1: "#4B414f",
  waveHovered2: "#4B418f",
  waveDefault: "#D5A021"
}

export default new theming.Theme(StaccTheme, StaccDocsTheme).add({
  color: { ...savingsAdvisorColors }
})
