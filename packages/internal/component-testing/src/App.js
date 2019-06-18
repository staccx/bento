import React from "react"
import styled, { ThemeProvider } from "styled-components"
import {
  GlobalStyle,
  WebFonts,
  Wrapper,
  Breadcrumb,
  Heading,
  Layout,
  WidowFix,
  theming
} from "@staccx/base"
// import { NordeaTheme } from "@staccx/nordea-theme"
import theme from "./theme/Theme"

const App = () => {
  return (
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
      </Wrapper>
    </ThemeProvider>
  )
}

// const StyledBreadcrumb = styled(Breadcrumb)`
//   > li {
//     background-color: #ddd;
//     color: ${theming.color.primary};
//     margin-right: 5px;
//     flex-grow: 1;
//     &:first-child {
//       a {
//         padding-left: 10px;
//       }
//     }
//     &:last-child {
//       background-color: transparent;
//       color: ${theming.color.primary};
//       > div {
//         padding-right: 10px;
//         border-color: transparent;
//       }
//     }
//     a,
//     &:last-item > div {
//       border-color: #ddd;
//     }
//     &:hover a {
//       background-color: ${theming.color.primary};
//     }
//     &:not(:last-child):hover {
//       background-color: ${theming.color.primary};
//       color: ${theming.color.white};
//     }
//   }
// `

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
