import { getFields, fieldsets } from "./supportedLanguages";
export default {
  title: "Localized Rich text",
  name: "localeRichText",
  type: "object",
  fieldsets,
  fields: getFields("array", {
    type: "block"
  }),
  preview: {
    select: {
      title: "nb"
    },

    prepare(selection) {
      const {
        _type,
        title
      } = selection;
      return {
        title: title.length ? title[0].children.reduce((acc, current) => acc + current.text, "").substring(0, 20) : "denne er tom",
        subtitle: _type
      };
    }

  }
};