import fields from "./components/Custom.Fields"

import StringField from "./components/Custom.Fields.StringField"
import ObjectField from "./components/Custom.Fields.ObjectField"
import SchemaField from "./components/Custom.SchemaField"
export { default as Schema } from "./components/Schema"
export { default as Widgets } from "./components/Custom.Widgets"

export const Fields = {
  ...fields,
  StringField,
  ObjectField,
  SchemaField
}
