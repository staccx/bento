import React from "react"
import addons, { types } from "@storybook/addons"
import BentoTool from "./bento.addon"

const ADDON_ID = "myaddon"
const PANEL_ID = `${ADDON_ID}/panel`

const register = () => {
  addons.register(ADDON_ID, api => {
    const render = ({ active }) => <BentoTool api={api} active={active} />
    const title = "My Addon"

    addons.add(PANEL_ID, {
      type: types.PANEL,
      title,
      render
    })
  })
}

register()
