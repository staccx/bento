import React from "react"
import IconProfile from "../Icons/Icon.Profile"
import IconLogout from "../Icons/Icon.Logout"
import { ThemeComponent } from "@staccx/theme"

export default pages => [
  {
    _id: "sioahugcf",
    label: "Min profil",
    icon: <ThemeComponent tagName={"iconProfile"} fallback={IconProfile} />,
    page: () => pages.profile()
  },
  {
    _id: "fugya",
    label: "Logg ut",
    icon: <ThemeComponent tagName={"iconLogout"} fallback={IconLogout} />
  }
]
