import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import ExpandListItem from "./ExpandListItem"
import List from "../List.js"

describe("ExpandListItem", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <List>
              <ExpandListItem>
                Du får umiddelbart svar på søknaden og kan se hvor mye du får i
                lån
              </ExpandListItem>
              <ExpandListItem>
                Normalt vil du ha pengene på din konto i annen bank en til to
                virkedager etter vi har mottatt søknad og godkjent all
                dokumentasjon. Om du ønsker utbetaling på dagen kontakter du
                vårt kundesenter.
              </ExpandListItem>
            </List>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Title", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <List>
              <ExpandListItem title="Hvor lang tid tar det før jeg får svar på søknaden?">
                Du får umiddelbart svar på søknaden og kan se hvor mye du får i
                lån
              </ExpandListItem>
              <ExpandListItem title="Hvor lang tid tar det før lånet blir utbetalt?">
                Normalt vil du ha pengene på din konto i annen bank en til to
                virkedager etter vi har mottatt søknad og godkjent all
                dokumentasjon. Om du ønsker utbetaling på dagen kontakter du
                vårt kundesenter.
              </ExpandListItem>
            </List>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("expanded", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <List>
              <ExpandListItem expanded>
                Du får umiddelbart svar på søknaden og kan se hvor mye du får i
                lån
              </ExpandListItem>
              <ExpandListItem expanded>
                Normalt vil du ha pengene på din konto i annen bank en til to
                virkedager etter vi har mottatt søknad og godkjent all
                dokumentasjon. Om du ønsker utbetaling på dagen kontakter du
                vårt kundesenter.
              </ExpandListItem>
            </List>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("flush", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <List>
              <ExpandListItem flush>
                Du får umiddelbart svar på søknaden og kan se hvor mye du får i
                lån
              </ExpandListItem>
              <ExpandListItem flush>
                Normalt vil du ha pengene på din konto i annen bank en til to
                virkedager etter vi har mottatt søknad og godkjent all
                dokumentasjon. Om du ønsker utbetaling på dagen kontakter du
                vårt kundesenter.
              </ExpandListItem>
            </List>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("All", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <List>
              <ExpandListItem flush expanded title="test">
                Du får umiddelbart svar på søknaden og kan se hvor mye du får i
                lån
              </ExpandListItem>
              <ExpandListItem flush expanded title="test">
                Normalt vil du ha pengene på din konto i annen bank en til to
                virkedager etter vi har mottatt søknad og godkjent all
                dokumentasjon. Om du ønsker utbetaling på dagen kontakter du
                vårt kundesenter.
              </ExpandListItem>
            </List>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
