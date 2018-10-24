import React, { Component } from "react"
import { Wrapper } from "@staccx/base"
import { ThemeProxyProvider } from "@staccx/theme"
import { BrowserRouter as Router } from "react-router-dom"
import theme from "./theme/Theme"

class App extends Component {
render() {
return (
<ThemeProxyProvider theme={theme}>
        <Router>
            <Wrapper>
                <div>Fresh app smell...</div>
            </Wrapper>
        </Router>
</ThemeProxyProvider>
)
}
}

export default App
