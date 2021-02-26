import color from "./color"
import styled from "styled-components"
import { theme as theming } from "../themes/baseTheme"



export default {
  title: "Styling/Convenience/Color",
  component: color,
  parameters: {
    docs: {
      description: {
        component: 'Function to easily extract color from theme.\n\n' +

          'Start by import theming from bento, as seen below \n\n ' +
          '    import { theming } from "@staccx/bento"\n\n' +
          'You can now use colors that is often placed in theme/properties/color in your project folder.\n\n' +
          'Example:\n\n' +
          '    theming.theme.append({\n\n' +
          '        color: {\n\n' +
          '            bg: "#FBFDFE",\n\n' +
          '            text: "#003755",\n\n' +
          '            primary: "#003755",\n\n' +
          '    })'

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

UsageExample.parameters = {
  docs: {
    description: {
      story: 'Below is examples of how you can extract color from the theme. ',
    },
  },
};

export const ColorBasedOnState = (args) => (
    <div>
      {'const Button = styled(Button)`'} <br />
      {`background: \${p =>`} <br />
      {`p.loading === "isLoading`} <br />
      {`?  \`\${theming.color("bg")};`} <br />
      {`: \`\${theming.color("primary")};`} <br />
      {'´'}
    </div>

)

ColorBasedOnState.parameters = {
  docs: {
    description: {
      story: 'The extraction function can also be used to change color based on a state, as seen in the example below.\n\n ' +
        'If you have a button with a state named loading, you can set the background color of that button based on the loading state. \n\n ' +
        'Example: \n\n ' +
        '     \<Button onClick=\{handleOnClick\}> \n\n ' +
        '         \{loading === "isLoading" && \<SimpleLoading \/>} \n\n' +
        '           Example text \n\n ' +
        '     \</Button>'
    },
  },
};
