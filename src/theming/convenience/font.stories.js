import font from "./font"
import styled from "styled-components"

export default {
  title: "Styling/Convenience/Font",
  component: font,
  parameters: {
    docs: {
      description: {
        component: 'Setting font from theme.\n\n' +

          'Start by import theming from bento, as seen below \n\n ' +
          '    import { theming } from "@staccx/bento"\n\n' +
          'You can now use font associated css properties that is often placed in theme/properties/font in your project folder.\n\n' +
          'Example:\n\n' +
          '    theming.theme.append({\n\n' +
          '        fontFamily: {\n\n' +
          '           heading: "IBM Plex Sans",\n\n' +
          '           body: "Open Sans",\n\n' +
          '         },\n\n' +
          '         font: {\n\n' +
          '           h1: "1.8333333333rem",\n\n' +
          '           h2: "1.5rem",\n\n' +
          '           h3: "1.5rem",\n\n' +
          '         }, '+
          '         fontWeight: {\n\n' +
          '           bold: "700",\n\n' +
          '           normal: "400"\n\n' +
          '         }\n\n' +
          '    })'
      },
    }
  },
}

export const Default = (args) => {
  const ExampleDiv = styled.div`
    background-color: #666666;
    p {
      font-size: ${font[args.font]};
    }
    padding: 1rem;
  `

  return (
    <ExampleDiv>
      <p>The quick brown fox jumps over the lazy dog</p>
    </ExampleDiv>
  )
}

Default.args = {
  font: "base",
}

export const HeaderSize1 = (args) => {
  const ExampleDiv = styled.div`
    background-color: #666666;
    p {
      font-size: ${font[args.font]};
    }
    padding: 1rem;
  `

  return (
    <ExampleDiv>
      <p>The quick brown fox jumps over the lazy dog</p>
    </ExampleDiv>
  )
}

HeaderSize1.args = {
  font: "h1",
}

export const HeaderSize2 = (args) => {
  const ExampleDiv = styled.div`
    background-color: #666666;
    p {
      font-size: ${font[args.font]};
    }
    padding: 1rem;
  `

  return (
    <ExampleDiv>
      <p>The quick brown fox jumps over the lazy dog</p>
    </ExampleDiv>
  )
}

HeaderSize2.args = {
  font: "h2",
}

export const HeaderSize3 = (args) => {
  const ExampleDiv = styled.div`
    background-color: #666666;
    p {
      font-size: ${font[args.font]};
    }
    padding: 1rem;
  `

  return (
    <ExampleDiv>
      <p>The quick brown fox jumps over the lazy dog</p>
    </ExampleDiv>
  )
}

HeaderSize3.args = {
  font: "h3",
}

export const HeaderSize4 = (args) => {
  const ExampleDiv = styled.div`
    background-color: #666666;
    p {
      font-size: ${font[args.font]};
    }
    padding: 1rem;
  `

  return (
    <ExampleDiv>
      <p>The quick brown fox jumps over the lazy dog</p>
    </ExampleDiv>
  )
}

HeaderSize4.args = {
  font: "h4",
}

export const HeaderSizeTiny = (args) => {
  const ExampleDiv = styled.div`
    background-color: #666666;
    p {
      font-size: ${font[args.font]};
    }
    padding: 1rem;
  `

  return (
    <ExampleDiv>
      <p>The quick brown fox jumps over the lazy dog</p>
    </ExampleDiv>
  )
}

HeaderSizeTiny.args = {
  font: "tiny",
}
