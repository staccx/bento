import props from "../generated/props.json"

export const valueToString = value => {
  return value.value
}

export const typeToString = type => {
  console.log("typetostring:", type)
  switch (type.name) {
    case "enum": {
      return type.value.map(v => v.value).join(" | ")
    }

    case "func": {
      return "function"
    }

    case "string": {
      return "string"
    }

    case "number": {
      return "number"
    }

    case "element": {
      return "element"
    }

    case "arrayOf": {
      return "[".concat(typeToString(type.value).concat(", ...]"))
    }

    case "union": {
      return type.value.map(typeToString).join(" | ")
    }

    case "array": {
      return "array"
    }

    case "custom": {
      if (type.raw.startsWith("themeProps.")) {
        const themeProp = type.raw.split(".")[1]
        return typeToString(props.themeProps.props[themeProp].type)
      }
      return type.raw
    }

    default: {
      return JSON.stringify(type)
    }
  }
}
