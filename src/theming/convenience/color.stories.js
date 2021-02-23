import color from "./color"
import styled from "styled-components"
import { theme as theming } from "../themes/baseTheme"



export default {
  title: "Styling/Color",
  component: color,
  parameters: {
    docs: {
      description: {
        component: 'Function to easily extract color from theme.\n\n' +

          'Start by import theming from bento, as seen below \n\n ' +
          '    import { theming } from "@staccx/bento"\n\n' +
          'You can now use colors that is often found under theme/properties/color in your project folder.\n\n' +
          'Example:\n\n' +
          '    theming.theme.append({\n\n' +
          '        color: {\n\n' +
          '            bg: "#FBFDFE",\n\n' +
          '            text: "#003755",\n\n' +
          '            primary: "#003755",\n\n' +
          '    })\n\n' +
          'It can also be used to change color based on a state.'
      },
    }
  },
}

export const Default = (args) => {
  const ExampleDiv = styled.div`
    background-color: ${theming.color[args.colorString]};
    color: ${theming.color[args.colorStringSecondary]};
    padding: 1rem;
  `

  return (
    <ExampleDiv>
      <p>The quick brown fox jumps over the lazy dog</p>
    </ExampleDiv>
  )
}


Default.args = {
  colorString: "wcag",
  colorStringSecondary: "white"
}



export const UsageExample = (args) => (
  <div>
    {`const ColoredBox = styled.div\``}<br />
    {`background-color: \${theming.color\`primary\`};`} <br />
    {`\``} <br />
    or<br />
    {`const ColoredBox2 = styled.div\``}  <br />
    {`background-color: \${theming.color("primary")};`}  <br />
    {`\``}
  </div>
)

export const ColorBasedOnState = (args) => (
    <div>
      {`background: \${p =>`} <br />
      {`p.loading === "isLoading`} <br />
      {`?  \`\${theming.color("bg")};`} <br />
      {`: \`\${theming.color("primary")};`}
    </div>
)
