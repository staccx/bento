import React from "react"
import renderer from "react-test-renderer"
import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import "@testing-library/jest-dom"
import baseTheme from "../../theming/themes/baseTheme"
import CodeRenderer from "./CodeRenderer"
import CodeWrapper from "./CodeWrapper"

const code = `public class MyClass {
                      int x = 5;
                      public static void main(String[] args) {
                      MyClass myObj = new MyClass();
                      System.out.println(myObj.x);
                        }
                      }`

describe("CodeRenderer", () => {
  describe("Snapshots", () => {
    it("Java", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <CodeRenderer
              language="java"
              code={`public class MyClass {
                      int x = 5;
                      public static void main(String[] args) {
                      MyClass myObj = new MyClass();
                      System.out.println(myObj.x);
                        }
                      }`}
            />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("JavaScript with codeWrapper", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <CodeWrapper className="language-javascript">
              <CodeRenderer
                language="javascript"
                code={`import React from "react"
        class MyApp extends React.Component {
          render() {
              return <div>Hello world!</div>
          }
        }
        export default MyApp`}
              />
            </CodeWrapper>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("CSharp", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <CodeRenderer
              language="csharp"
              code={`class Example {
        ctor
        }
        class Program
        {
            static void Main()
            {
            }
        }`}
            />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Default break", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <CodeRenderer
              language="none"
              code={`class Example {
        ctor
        }
        class Program
        {
            static void Main()
            {
            }
        }`}
            />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Markup with codeWrapper", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <CodeWrapper className="language-markup">
              <CodeRenderer
                language="markup"
                code={`<!DOCTYPE HTML>
          <html lang = "en">
          <head>
            <!-- basic.html -->
            <title>basic.html</title>
            <meta charset = "UTF-8" />
          </head>
          <body>
            <h1>Level One Headline</h1>
            <p>
              This is a paragraph.
              Note that the text is automatically wrapped.
            </p>
          </body>
          </html>`}
              />
            </CodeWrapper>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
  describe("Rendering", () => {
    it("Should show code", () => {
      render(
        <ThemeProvider theme={baseTheme}>
          <CodeRenderer language="java" code={code} />
        </ThemeProvider>
      )
      expect(screen.getByText("void")).toBeInTheDocument()
    })
  })
})
