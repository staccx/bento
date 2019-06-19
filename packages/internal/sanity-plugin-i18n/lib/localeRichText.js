import blockOptions from "part:@staccx/i18n/blockOptions?"
import { getFields, fieldsets } from "./supportedLanguages"

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}
    var ownKeys = Object.keys(source)
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable
        })
      )
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key])
    })
  }
  return target
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    })
  } else {
    obj[key] = value
  }
  return obj
}
const options = blockOptions || {}
console.log(options)
console.log("here")
export default {
  title: "Localized Rich text",
  name: "localeRichText",
  type: "object",
  fieldsets,
  fields: getFields(
    "array",
    _objectSpread(
      {
        type: "block"
      },
      options
    )
  ),
  preview: {
    select: {
      title: "nb"
    },

    prepare(selection) {
      const { _type, title } = selection
      return {
        title: title.length
          ? title[0].children
              .reduce((acc, current) => acc + current.text, "")
              .substring(0, 20)
          : "denne er tom",
        subtitle: _type
      }
    }
  }
}
