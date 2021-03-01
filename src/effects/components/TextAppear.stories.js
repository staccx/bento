import TextAppear from "./TextAppear"
import Heading from "../../components/Text/Heading/Heading"

export default {
  title: "effects/TextAppear",
  component: TextAppear
}

export const Standard = () => <TextAppear>This is the text</TextAppear>
export const Wrapped = () => (
  <Heading level={1}>
    <TextAppear>This is the text</TextAppear>
  </Heading>
)
