import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import WidowFix from "./WidowFix"

describe("WidowFix", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <WidowFix>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              iaculis erat ipsum, ut euismod orci luctus sit amet. Donec et
              tincidunt dolor, at vehicula mauris. Nullam eleifend tristique
              arcu ac scelerisque. Pellentesque sapien ex, faucibus sit amet
              nulla eget, sollicitudin fringilla arcu. Suspendisse imperdiet
              urna eu nulla tincidunt pretium. Nunc a blandit nulla, ac feugiat
              nulla. Nulla nisl nunc, ornare quis odio gravida, sodales mattis
              enim. Aenean turpis dui, fringilla in arcu a, consectetur placerat
              sapien. Aenean nec augue quis ipsum feugiat maximus. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Suspendisse
              vitae nisl vehicula ante gravida scelerisque faucibus ac enim.
              Suspendisse imperdiet tellus id tristique
            </WidowFix>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("threshold", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <WidowFix threshold={9}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              iaculis erat ipsum, ut euismod orci luctus sit amet. Donec et
              tincidunt dolor, at vehicula mauris. Nullam eleifend tristique
              arcu ac scelerisque. Pellentesque sapien ex, faucibus sit amet
              nulla eget, sollicitudin fringilla arcu. Suspendisse imperdiet
              urna eu nulla tincidunt pretium. Nunc a blandit nulla, ac feugiat
              nulla. Nulla nisl nunc, ornare quis odio gravida, sodales mattis
              enim. Aenean turpis dui, fringilla in arcu a, consectetur placerat
              sapien. Aenean nec augue quis ipsum feugiat maximus. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Suspendisse
              vitae nisl vehicula ante gravida scelerisque faucibus ac enim.
              Suspendisse imperdiet tellus id tristique
            </WidowFix>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
