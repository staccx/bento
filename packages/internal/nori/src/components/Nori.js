// @flow
import React from "react"
import { ThemeProvider } from "styled-components"
import {
  GlobalStyle,
  WebFonts,
  Loading,
  theming,
  Alert,
  i18n
} from "@staccx/base"
import { SanityList, SanityProvider } from "@staccx/sanity"

const defaultParseTexts = (acc, curr) => {
  acc[curr.i18nKey.current] = curr.value[0]
  return acc
}

const Nori = ({
  sanityConfig,
  theme,
  children,
  i18nConfig = {
    translationSchemaType: "translations"
  },
  logLevel = 5,
  parseTexts = defaultParseTexts,
  loadingVariant = theming.VARIANT_DEFAULT
}) => {
  if (!sanityConfig) {
    return (
      <Alert type={"warning"}>
        No sanity config. This is not supported (yet?)
      </Alert>
    )
  }
  return (
    <SanityProvider {...sanityConfig}>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <WebFonts />
          <GlobalStyle />
          <SanityList type={i18nConfig.translationSchemaType}>
            {({ result }) => {
              if (!result) {
                return <Loading variant={loadingVariant} />
              }

              return (
                <i18n.Provider
                  logLevel={logLevel}
                  texts={result.reduce(parseTexts)}
                  {...i18nConfig}
                >
                  {children}
                </i18n.Provider>
              )
            }}
          </SanityList>
        </React.Fragment>
      </ThemeProvider>
    </SanityProvider>
  )
}

export default Nori
