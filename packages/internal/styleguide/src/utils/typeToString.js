import props from "../generated/props.json"

const typeToString = type => {
  switch (type.name) {
    case "enum": {
      return type.value.map(v => v.value).join(" / ")
    }

    case "func": {
      return "function()"
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
      return "array of ".concat(typeToString(type.value)).concat("'s")
    }

    case "union": {
      return type.value.map(typeToString).join(" / ")
    }

    case "array": {
      return "array"
    }

    case "custom": {
      // reactDocs doesn't resolve referenced proptypes, so we have to do it ourselves:
      // props.themeProps are the result of running reactDocs.parse on the contents of
      // /packages/internal/theme/src/themeProps.js
      if (type.raw.startsWith("themeProps.")) {
        const themeProp = type.raw.split(".")[1]
        return typeToString(props.themeProps.props[themeProp].type)
      }
      return type.raw
    }

    case "any": {
      return "any"
    }

    case "object": {
      return "object"
    }

    case "shape": {
      return "{ "
        .concat(
          Reflect.ownKeys(type.value)
            .map(prop =>
              prop.concat(": ").concat(typeToString(type.value[prop]))
            )
            .join(", ")
        )
        .concat(" }")
    }

    case "bool": {
      return "true or false"
    }

    default: {
      return JSON.stringify(type)
    }
  }
}

export default typeToString
