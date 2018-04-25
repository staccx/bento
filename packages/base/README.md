# Base

## NOTE
Project using *Base* needs to have styled-components as a dependency

## Install

```bash
yarn add @staccx/base styled-components@3.2.6
```

## Usage

#### Minimum requirement
```javascript
import React, { Component } from "react"
import {ThemeProvider} from "styled-components"
import { Input, BaseTheme } from "@staccx/base"

class Example extends Component {
  render() {
    return ( 
    <ThemeProvider theme={theme}>
        <Input />
    </ThemeProvider>
    )
  }
}
```

## Theming

```javascript
// theme.js
import {themeManager} from "@staccx/base"

const font = {
  input: "12px"
}

const color = {
   input: "#a1231a"
}

const spacing = {
  small: "9px"
}

themeManager
.addGlobal("font", font)
.addGlobal("color", color)
.addGlobal("spacing", spacing) //Chains


export default themeManager.Theme

------------

// app.js
...
import theme from "./theme.js"

render() {
    return (
    <ThemeProvider theme={theme}>
        <Input />
    </ThemeProvider>
    )
  }

```

## Adding styles to base components
In other to do this you need `@staccx/theme` // TODO: Should this be proxied through base?

```javascript
// myInputStyle.js
import {css} from "styled-components"
import {registerStyle, color, spacing} from "@staccx/theme"

export const myInputStyle = registerStyle(css`
    margin-right: ${spacing.medium};
    color: ${color.primary};
`

export const myInputLabelStyle = registerStyle(css`
     position: absolute;
     left: ${spacing.medium};
     top: ${spacing.medium};
     color: ${color.black};
`

------------

// theme.js

import {themeManager, InputStyles} from "@staccx/base"
import {myInputStyle, myInputLabelStyle} from "./myInputStyle"

themeManager
.addStyle(myInputStyle, InputStyles.INPUT)
.addStyle(myInputLabelStyle, InputStyles.INPUT_LABEL)

export default themeManager.Theme

------------

// app.js
...
import theme from "./theme.js"

render() {
    return (
    <ThemeProvider theme={theme}>
        <Input />
    </ThemeProvider>
    )
  }

```
