import React from "react"
import { Flag, Heading, Text } from "@staccx/base"

const Checkmark = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M7.7 13.734L16.433 5l2.773 2.773L7.7 19.28 0 11.58l2.773-2.773L7.7 13.734z"
      fill="#4FAF73"
    />
  </svg>
)

const CheckMarkBlock = ({ title, children }) => (
  <Flag img={<Checkmark />} tiny top>
    <Heading level="3" variant="checkMarkBlockHeading">
      {title}
    </Heading>
    <Text variant="checkMarkBlock">{children}</Text>
  </Flag>
)

export default CheckMarkBlock
