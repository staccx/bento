import languages from "part:@staccx/i18n/languages?"

const supportedLanguages = languages || [
  { id: "nb", title: "Norwegian", isDefault: true }
]

export const getFields = (type, o = null) =>
  supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: type,
    ...(o && { of: o }),
    fieldset: lang.isDefault ? null : "translations"
  }))

export const getPreview = () => ({
  select: {
    title: supportedLanguages[0].id
  },
  prepare(selection) {
    const { _type, title } = selection
    return {
      title,
      subtitle: _type
    }
  }
})

const fieldsets = [
  {
    title: "Translations",
    name: "translations",
    options: { collapsable: true }
  }
]

export { supportedLanguages, fieldsets }
