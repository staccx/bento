import props from "../generated/props.json"
import React from "react"

const parseType = type => {
  switch (type.name) {
    case "enum": {
      return (
        <span>
          {type.value
            .map(v => <span key={v.value}>{v.value}</span>)
            .reduce((acc, curr) => [acc, ", ", curr])}
        </span>
      )
    }

    case "func": {
      return <span>function()</span>
    }

    case "string": {
      return <span>string</span>
    }

    case "number": {
      return <span>number</span>
    }

    case "element": {
      return <span>element</span>
    }

    case "arrayOf": {
      return <span>array of {parseType(type.value)}'s</span>
    }

    case "union": {
      return (
        <span>
          {type.value
            .map(v => <span>{parseType(v)}</span>)
            .reduce((acc, curr) => [acc, ", ", curr])}
        </span>
      )
    }

    case "array": {
      return <span>array</span>
    }

    case "custom": {
      // reactDocs doesn't resolve referenced proptypes, so we have to do it ourselves:
      // props.themeProps are the result of running reactDocs.parse on the contents of
      // /packages/internal/theme/src/themeProps.js
      if (type.raw.startsWith("themeProps.")) {
        const themeProp = type.raw.split(".")[1]
        return parseType(props.themeProps.props[themeProp].type)
      }
      return type.raw
    }

    case "any": {
      return <span>any</span>
    }

    case "object": {
      return <span>object</span>
    }

    case "shape": {
      return (
        <span>
          {"{ "}
          {Reflect.ownKeys(type.value).map(prop => (
            <span>
              <span>{prop}</span>: <span>{parseType(type.value[prop])}</span>
            </span>
          ))}
          {" }"}
        </span>
      )
    }

    case "bool": {
      return (
        <span>
          <span>true</span> or <span>false</span>
        </span>
      )
    }

    default: {
      return <span>{JSON.stringify(type)}</span>
    }
  }
}

export default parseType
