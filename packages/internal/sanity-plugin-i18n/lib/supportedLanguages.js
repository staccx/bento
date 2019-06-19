import languages from "part:@staccx/i18n/languages?"

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

var supportedLanguages = languages || [
  {
    id: "nb",
    title: "Norwegian",
    isDefault: true
  }
]
export var getFields = function getFields(type) {
  var o =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null
  return supportedLanguages.map(function(lang) {
    return _objectSpread(
      {
        title: lang.title,
        name: lang.id,
        type: type
      },
      o && {
        of: [o]
      },
      {
        fieldset: lang.isDefault ? null : "translations"
      }
    )
  })
}
export var getPreview = function getPreview() {
  return {
    select: {
      title: supportedLanguages[0].id
    },
    prepare: function prepare(selection) {
      var _type = selection._type
      var title = selection.title
      return {
        title: title,
        subtitle: _type
      }
    }
  }
}
var fieldsets = [
  {
    title: "Translations",
    name: "translations",
    options: {
      collapsable: true
    }
  }
]
export { supportedLanguages, fieldsets }
