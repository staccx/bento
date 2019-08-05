import React, {useState} from "react"
import { ThemeProvider } from "styled-components"
import RadioPill from "@staccx/base/src/components/Forms/RadioPill/RadioPill";
import RadioPillItem from "@staccx/base/src/components/Forms/RadioPill/RadioPill.Item";
import WebFonts from "@staccx/base/src/components/Theme/WebFonts";
import GlobalStyle from "@staccx/base/src/components/Theme/GlobalStyle";

const key = "bent-sb-theme"

const ThemesProvider = ({themes, initialTheme = null, story}) => {
  const index = localStorage.getItem(key)
  const [theme, setTheme] = useState(index ? themes[index] : themes[0])

  const handleTheme = e => {
    window.localStorage.setItem(key, e.target.value)
    setTheme(themes[e.target.value])
  }
  return (
    <ThemeProvider theme={theme}>
    <React.Fragment>
      <RadioPill group={"themes"} onChange={handleTheme}>
        {themes.map((t, index) => (
          <RadioPillItem
          key={t.name}
          value={index}
          defaultChecked={t.name === theme.name}
          id={t.name}
          >
          {t.name}
          </RadioPillItem>
          ))}
      </RadioPill>
      <GlobalStyle/>
      <WebFonts/>
      {story()}
    </React.Fragment>
    </ThemeProvider>
  )


}

export default ThemesProvider
