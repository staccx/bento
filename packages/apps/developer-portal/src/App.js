import React, { Component } from "react"
// import { RedocStandalone } from "redoc"
import { ThemeProxyProvider } from "@staccx/theme"
import theme from "./theme.js"
import ApiRenderer from "./components/ApiRenderer"

// const redocTheme: ThemeInterface = {
//   spacingUnit: 20,
//   breakpoints: {
//     small: "50rem",
//     medium: "85rem",
//     large: "105rem"
//   },
//   colors: {
//     main: "#DD5346",
//     success: "#32DA38",
//     redirect: "#FFAF32",
//     error: "#DD5346",
//     info: "#5293EE",
//     text: "#263238",
//     warning: "#f1c400",
//     http: {
//       get: "#6bbd5b",
//       post: "#248fb2",
//       put: "#9b708b",
//       options: "#d3ca12",
//       patch: "#e09d43",
//       delete: "#e27a7a",
//       basic: "#999",
//       link: "#31bbb6"
//     }
//   },
//   schemaView: {
//     linesColor: "#DD5346",
//     defaultDetailsWidth: "75%",
//     typeNameColor: theme => theme.colors.text,
//     typeTitleColor: theme => theme.schemaView.typeNameColor,
//     requireLabelColor: theme => theme.colors.error
//   },
//   baseFont: {
//     size: "14px",
//     lineHeight: "1.5",
//     weight: "400",
//     family: "IBM Plex Sans, sans-serif",
//     smoothing: "antialiased",
//     optimizeSpeed: true
//   },
//   headingsFont: {
//     family: "IBM Plex Sans, sans-serif"
//   },
//   code: {
//     fontSize: "13px",
//     fontFamily: "IBM Plex Mono, monospace"
//   },
//   links: {
//     color: ({ colors }) => colors.main,
//     visited: ({ colors }) => colors.main,
//     hover: ({ colors }) => "#5656D1"
//   },
//   menu: {
//     width: "260px",
//     backgroundColor: "#fafafa"
//   },
//   logo: {
//     maxHeight: ({ menu }) => menu.width,
//     maxWidth: ({ menu }) => menu.width
//   },
//   rightPanel: {
//     backgroundColor: "#263238",
//     width: "40%"
//   }
// }

class App extends Component {
  render() {
    return (
      <ThemeProxyProvider theme={theme}>
        <ApiRenderer url={"https://demo.quantfol.io/swagger/v1/swagger.json"} />
      </ThemeProxyProvider>
    )
  }
}

export default App
