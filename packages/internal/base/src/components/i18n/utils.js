import SanityRichText from "../Sanity/SanityRichText"
import Text from "../Text/Text/Text"
import React from "react"

export const isBlock = item => item._type && item._type === "block"

export const isRichText = val =>
  Array.isArray(val) &&
  val.some(
    arr =>
      typeof arr !== "string" &&
      Array.isArray(arr) &&
      arr.some(item => item._type)
  )

export const getComponent = val => {
  console.log(val)
  return Array.isArray(val) ? (
    val.map(getComponent)
  ) : isBlock(val) ? (
    <SanityRichText key={val._key} blocks={val} />
  ) : (
    <Text key={val}>{val}</Text>
  )
}
