import spacing from "./spacing"
import styled from "styled-components"

export default {
  title: "Styling/Convenience/Spacing",
  component: spacing,
  parameters: {
    docs: {
      description: {
        component: 'Setting spacing from theme.\n\n' +

          'Start by import theming from bento, as seen below \n\n ' +
          '    import { theming } from "@staccx/bento"\n\n' +
          'You can now use spacing associated css properties that is often placed in theme/properties/spacing in your project folder.\n\n' +
          'Example:\n\n' +
          '    theming.theme.append({\n\n' +
          '       spacing: {\n\n' +
          '         huge: "4rem",\n\n' +
          '         large: "2rem",\n\n' +
          '    })'
      },
    }
  },
}

export const Default = (args) => {
  const ExampleDiv = styled.div`
    background-color: #666666;
    height: ${spacing[args.height]};
    display: flex;
    place-items: center;
  `

  return (
    <ExampleDiv>
    </ExampleDiv>
  )
}

Default.args = {
  height: "medium",
}

export const LargeSpacing = (args) => {
  const ExampleDiv = styled.div`
    background-color: #666666;
    height: ${spacing[args.height]};
    display: flex;
    place-items: center;
  `

  return (
    <ExampleDiv>
    </ExampleDiv>
  )
}

LargeSpacing.args = {
  height: "large",
}

export const TinySpacing = (args) => {
  const ExampleDiv = styled.div`
    background-color: #666666;
    height: ${spacing[args.height]};
    display: flex;
    place-items: center;
  `

  return (
    <ExampleDiv>
    </ExampleDiv>
  )
}

TinySpacing.args = {
  height: "tiny",
}
