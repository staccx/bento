import { themePropTypes } from "../../theming"

const themeProps = {
  main: {
    name: "BREADCRUMB_CONTAINER",
    description:
      "The main <ol> element, which also contains custom CSS properties.",
    type: themePropTypes.style
  },
  listItem: {
    name: "BREADCRUMB_ITEM",
    description: "One <li> list item.",
    type: themePropTypes.style
  },
  itemAnchor: {
    name: "BREADCRUMB_LINK",
    description:
      "Item <a> tag. Will also apply to the last item, which uses a <div>.",
    type: themePropTypes.style
  },
  itemText: {
    name: "BREADCRUMB_TEXT",
    description: "Item inner <div>.",
    type: themePropTypes.style
  },
  listItemLast: {
    name: "BREADCRUMB_ITEMLAST",
    description: "Item inner <div>.",
    type: themePropTypes.style
  }
}
export default themeProps
