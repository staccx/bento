import { useTheme } from "styled-components"
import { useEffect, useState } from "react"
import { getField } from "./getProp"

export default {
  title: "theming/Get Prop / Get Field"
}

export const CommonUsage = args => {
  const theme = useTheme()
  const [value, setValue] = useState(null)
  useEffect(() => {
    if (theme && args.field) {
      console.log("Setting value", args.field, theme)
      setValue(getField(args.field)({ theme }))
    }
  }, [theme, args.field])

  return (
    <div>
      <h1>{args?.field}</h1>
      <span>
        The value is: <strong>{value}</strong>
      </span>
    </div>
  )
}

CommonUsage.args = {
  field: "color.primary"
}
