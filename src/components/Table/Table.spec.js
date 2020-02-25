import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../theming/themes/baseTheme"
import Table from "./Table"

describe("Table", () => {
  describe("Snapshots", () => {
    it("Table", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Table
              renderHeader={({ item }) => (
                <th>
                  <i>{item.value}</i>
                </th>
              )}
            >
              {({ value }) => (
                <td>
                  <h3>{value}</h3>
                </td>
              )}
            </Table>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Tab", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Table onClick={e => console.log(e.target.value)}>
              {({ value }) => (
                <td onClick={e => console.log(e.target.value)}>
                  <h3>{value}</h3>
                </td>
              )}
            </Table>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
