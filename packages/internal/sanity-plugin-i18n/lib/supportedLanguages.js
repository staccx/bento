function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import languages from "part:@staccx/i18n/languages?";
const supportedLanguages = languages || [{
  id: "nb",
  title: "Norwegian",
  isDefault: true
}];
export const getFields = (type, o = null) => supportedLanguages.map(lang => _objectSpread({
  title: lang.title,
  name: lang.id,
  type: type
}, o && {
  of: [o]
}, {
  fieldset: lang.isDefault ? null : "translations"
}));
export const getPreview = () => ({
  select: {
    title: supportedLanguages[0].id
  },

  prepare(selection) {
    const {
      _type,
      title
    } = selection;
    return {
      title,
      subtitle: _type
    };
  }

});
const fieldsets = [{
  title: "Translations",
  name: "translations",
  options: {
    collapsable: true
  }
}];
export { supportedLanguages, fieldsets };