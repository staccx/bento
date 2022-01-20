import styled from "styled-components"
import {
  color
} from "./index"

export default {
  title: "Styling/Theme colors",
  parameters: {
    docs: {
      description: {
        component: 'These are the colors used in Bentos Base theme. These colors will vary between the different themes that are in use.\n\n' +
          'The colors are used just like the rest of the theme component. We use colors from theme to control the color palette within the project\n\n' +


          'Start by import theming from bento, as seen below \n\n ' +
          '    import { theming } from "@staccx/bento" \n\n' +

          'Example usage and import(using styled-component): \n\n' +
          '     const xxx () => {\n\n '+
          '       return (\n\n'+
          '         <ColoredBox/>\n\n '+
          '       )}\n\n'+
          '     export default xxx \n\n ' +
          '     const ColoredBox = styled.div` \n\n ' +
          '         background-color: theming.color.secondary \n\n ' +
          '     `})'
      },
    }
  },
}

export const Names = (args) => {
  const Box = styled.div`
    margin-right: 5px;
        border: 1px solid black;
        margin-bottom: 20px;
        height: 150px;
        width: 150px;
        text-align: center;
    `
  const Primary = styled(Box)`
    background-color: ${color("primary")};
    `
  const Secondary = styled(Box)`
    background-color: ${color("secondary")};
    `
  const Bg = styled(Box)`
    background-color: ${color("bg")};
        `
  const SubtleHover = styled(Box)`
    background-color: ${color("subtleHover")};
            `
  const BgGray = styled(Box)`
    background-color: ${color("bgGray")};
            `
  const Line = styled(Box)`
    background-color: ${color("line")};
            `
  const Gray = styled(Box)`
    background-color: ${color("gray")};
            `
  const Wcag = styled(Box)`
    background-color: ${color("wcag")};
            `
  const Disabled = styled(Box)`
    background-color: ${color("disabled")};
            `
  const Textcol = styled(Box)`
     background-color: ${color("text")};
             `
  const Negative = styled(Box)`
     background-color: ${color("negative")};
             `
  const Positive = styled(Box)`
     background-color: ${color("positive")};
             `
  const Warning = styled(Box)`
     background-color: ${color("warning")};
             `
  const Black = styled(Box)`
      background-color: ${color("black")};
              `
  const Green = styled(Box)`
        background-color: ${color("green")};
                `
  const Link = styled(Box)`
        background-color: ${color("link")};
                `
  const Text = styled.p`
        margin-top: 150px
    `


  return (
    <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
      <Primary>
      <Text >primary</Text>
    </Primary>
      <Secondary>
        <Text>Secondary</Text>
      </Secondary>
      <Bg>
        <Text>bg</Text>
      </Bg>
      <SubtleHover>
        <Text>subtleHover</Text>
      </SubtleHover>
      <BgGray>
        <Text>bgGray</Text>
      </BgGray>
      <Line>
        <Text>line</Text>
      </Line>
      <Gray>
        <Text>gray</Text>
      </Gray>
      <Wcag>
        <Text>wcag</Text>
      </Wcag>
      <Disabled>
        <Text>disabled</Text>
      </Disabled>
      <Textcol>
        <Text>text</Text>
      </Textcol>
      <Negative>
        <Text>negative</Text>
      </Negative>
      <Positive>
        <Text>negative</Text>
      </Positive>
      <Warning>
        <Text>warning</Text>
      </Warning>
      <Black>
        <Text>black</Text>
      </Black>
      <Green>
        <Text>green</Text>
      </Green>
      <Link>
        <Text>link</Text>
      </Link>
    </div>
  )
}


