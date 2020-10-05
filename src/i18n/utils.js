import SanityBlockContent from "../sanity/components/SanityBlockContent"
import Text from "../components/Text/Text/Text"
import React from "react"

export const isBlock = item =>
  item &&
  item.hasOwnProperty("_type") &&
  (item._type === "block" || item._type === "image")

export const isRichText = val =>
  Array.isArray(val) &&
  val.some(
    arr =>
      typeof arr !== "string" &&
      Array.isArray(arr) &&
      arr.some(item => item._type)
  )

export const getComponent = val => {
  return Array.isArray(val) ? (
    val.map(getComponent)
  ) : isBlock(val) ? (
    <SanityBlockContent key={val._key} blocks={val} />
  ) : (
    <Text key={val}>{val}</Text>
  )
}

export const handleArray = (value, data, children, translate) => {
  const values = value.map(
    (k, index) => translate(k, data) || React.Children(children)[index]
  )

  if (typeof children === "function") {
    return children(values)
  }

  return values.map(getComponent)
}
