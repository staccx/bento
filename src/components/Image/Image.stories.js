import React from "react"
import Image from "./Image"

export default {
  title: "New/Components/Image",
  component: Image
}

export const ImageStandard = args => (
  <Image src="http://via.placeholder.com/150x150" />
)

export const ImageRounded = args => (
  <Image src="http://via.placeholder.com/150x150" {...args} />
)

ImageRounded.args = { round: true }

export const ImageAspectRatio = args => (
  <Image
    src="https://media1.tenor.com/images/061f3de4379d7dd4ad198f8f12357197/tenor.gif?itemid=3975115"
    {...args}
  />
)

ImageAspectRatio.args = { aspectRatio: "16:9" }
