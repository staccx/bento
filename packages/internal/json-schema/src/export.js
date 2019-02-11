import fields from "./components/Custom.Fields"

import StringField from "./components/Custom.Fields.StringField"
import ObjectField from "./components/Custom.Fields.ObjectField"
import BooleanField from "./components/Custom.Fields.BooleanField"
import ArrayField from "./components/Custom.Fields.ArrayField"
import SchemaField from "./components/Custom.SchemaField"
export { default as Schema } from "./components/Schema"
export { default as Widgets } from "./components/Custom.Widgets"

export const Fields = {
  ...fields,
  ArrayField,
  StringField,
  ObjectField,
  SchemaField,
  BooleanField
}
