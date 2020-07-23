import React from "react"
import FocusTrap from "./FocusTrap"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../theming/themes/baseTheme"

describe("FocusTrap", () => {
  describe("Snapshots", () => {
    it("First", () => {
      const three = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <div>
              <p>this is outside of the trap</p>
              <FocusTrap options={{ clickOutsideDeactivates: false }}>
                <>
                  <span>this is inside the trap</span>
                  <div>
                    <p>Some more text</p>
                  </div>
                  <button>This is focusable</button>
                  <button>This is focusable</button>
                </>
              </FocusTrap>
            </div>
          </ThemeProvider>
        )
        .toJSON()
      expect(three).toMatchSnapshot()
    })
  })
})
