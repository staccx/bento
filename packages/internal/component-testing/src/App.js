import React from "react"
import styled, { ThemeProvider } from "styled-components"
import {
  Breadcrumb,
  GlobalStyle,
  Heading,
  i18n,
  Layout,
  theming,
  WebFonts,
  WidowFix,
  Wrapper
} from "@staccx/base"
// import { NordeaTheme } from "@staccx/nordea-theme"
import theme from "./theme/Theme"

const { Translate, useI18n, Transform } = i18n

const testData = {
  nb: [
    {
      _key: "42b883c30ffa",
      _type: "block",
      children: [
        {
          _key: "42b883c30ffa0",
          _type: "span",
          marks: [],
          text: "Dette er "
        },
        {
          _key: "42b883c30ffa1",
          _type: "span",
          marks: ["em"],
          text: "rik"
        },
        {
          _key: "42b883c30ffa2",
          _type: "span",
          marks: [],
          text: " "
        },
        {
          _key: "42b883c30ffa3",
          _type: "span",
          marks: ["strong"],
          text: "tekst"
        }
      ],
      markDefs: [],
      style: "normal"
    }
  ]
}

const TestTransformFunction = () => {
  const { transform } = useI18n()

  return transform(testData)
}

const App = () => {
  return (
    <i18n.Provider
      language={"nb"}
      languages={["en", "nb"]}
      debug
      backend={i18n.SanityBackend}
      backendOptions={{
        sanity: {
          projectId: "bnlriaf0",
          dataset: "production"
        }
      }}
    >
      <ThemeProvider theme={theme}>
        <Wrapper size={"medium"}>
          <GlobalStyle />
          <WebFonts />
          <Layout>
            <StyledBreadcrumb
              path={[
                {
                  name: "First",
                  to: "/"
                },
                {
                  name: "Second",
                  to: "/"
                },
                {
                  name: "Third",
                  to: "/"
                },
                {
                  name: "Fourth",
                  to: "/"
                }
              ]}
            />
            <p />
            <p>
              <strong>Uten WidowFix:</strong>
            </p>
            <Heading level={2}>General Data Protection Regulation</Heading>
            <Heading level={2}>Payment Service Directive 2</Heading>
            <hr />
            <p>
              <strong>Default WidowFix (threshold = 7):</strong>
            </p>
            <Heading level={2}>
              <WidowFix threshold={7}>
                General Data Protection Regulation
              </WidowFix>
            </Heading>
            <Heading level={2}>
              <WidowFix threshold={7}>Payment Service Directive 2</WidowFix>
            </Heading>
            <hr />
            <p>
              <strong>&#60;WidowFix threshold={11}&#62;</strong>
            </p>
            <Heading level={2}>
              <WidowFix threshold={11}>
                General Data Protection Regulation
              </WidowFix>
            </Heading>
            <Heading level={2}>
              <WidowFix threshold={11}>Payment Service Directive 2</WidowFix>
            </Heading>
          </Layout>

          <div>
            <span role={"img"} aria-label={"point down"}>
              👇
            </span>{" "}
            uses raw block content to render
            <TestTransformFunction />
            <Transform value={testData} />
          </div>
          <hr />
          <Translate i18n={"string"} />
          <Translate i18n={"text"} />
          <Translate i18n={"rik-tekst"} />
          <Translate i18n={["string", "text", "rik-tekst"]} />
          <Translate i18n={"liste"} />
          <Translate i18n={"liste"}>
            {value => {
              if (!Array.isArray(value)) {
                return value
              }
              return (
                <div>
                  <h1>list via renderProps</h1>
                  <ul>
                    {value.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )
            }}
          </Translate>
          <div>
            <Translate i18n={"liste-forskjellig"} />
          </div>
          <Translate i18n={"dynamic-value"} data={{ cars: 3 }} />
          <hr />
          <Translate i18n={"currency"} data={{ balance: 10000 }} />
          <div>
            <Translate i18n={"bil"} />
          </div>

          <div>
            <Translate i18n={"bil"} data={{ count: 2 }} />
          </div>
          <div>
            <Translate i18n={"nesting"} data={{ count: 2 }} />
          </div>
          <div>
            <Translate i18n={"baby"} />
            <hr />
            <Translate i18n={"baby"} data={{ context: "male" }} />
            <hr />
            <Translate i18n={"baby"} data={{ context: "female" }} />
          </div>
        </Wrapper>
      </ThemeProvider>
    </i18n.Provider>
  )
}

const StyledBreadcrumb = styled(Breadcrumb)`
  --item-distance: 5px;
  --end-padding: 10px;
  --full-width: 1;
  --col-bg: #ddd;
  --col-txt: ${theming.color.primary};
  --col-hover-bg: ${theming.color.primary};
  --col-hover-txt: ${theming.color.white};
  --col-current-bg: transparent;
  --col-current-txt: ${theming.color.primary};
`

export default App
