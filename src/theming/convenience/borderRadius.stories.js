import borderRadius from "./borderRadius"
import styled from "styled-components"

export default {
  title: "Styling/Convenience/Border-radius",
  component: borderRadius,
  parameters: {
    docs: {
      description: {
        component: 'Setting border-radius from theme.\n\n' +

          'Start by import theming from bento, as seen below \n\n ' +
          '    import { theming } from "@staccx/bento"\n\n' +
          'You can now use border-radius that is often placed in theme/properties/spacing in your project folder.\n\n' +
          'Example:\n\n' +
          '    theming.theme.append({\n' +
          '        borderRadius: "25px"\n' +
          '    })'
      },
    }
  },
}

export const Default = (args) => {
  const ExampleDiv = styled.div`
    border-radius: ${args.borderRadius};
    border: 1px solid gray;
    padding: 1rem;
  `

  return (
    <ExampleDiv>
      <p>The quick brown fox jumps over the lazy dog</p>
    </ExampleDiv>
  )
}

Default.args = {
  borderRadius: "2px",
}

export const RoundCornersBorderRadius = (args) => {
  const ExampleDiv = styled.div`
    border-radius: ${args.borderRadius};
    border: 1px solid gray;
    padding: 1rem;
  `

  return (
    <ExampleDiv>
      <p>The quick brown fox jumps over the lazy dog</p>
    </ExampleDiv>
  )
}

RoundCornersBorderRadius.args = {
  borderRadius: "25px",
}

export const OvalBorderRadius = (args) => {
  const ExampleDiv = styled.div`
    border-radius: ${args.borderRadius};
    border: 1px solid gray;
    padding: 1rem;
  `

  return (
    <ExampleDiv>
      <p>The quick brown fox jumps over the lazy dog</p>
    </ExampleDiv>
  )
}

OvalBorderRadius.args = {
  borderRadius: "50px",
}
