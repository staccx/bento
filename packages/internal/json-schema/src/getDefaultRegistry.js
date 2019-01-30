import fields from "./components/Custom.Fields"
import widgets from "./components/Custom.Widgets"

export function getDefaultRegistry() {
  return {
    fields,
    widgets,
    definitions: {},
    formContext: {}
  }
}
