import React from "react"
import IconArrowUp from "../Theme/Icons/Icon.ArrowUp"
import IconProfile from "../Theme/Icons/Icon.Profile"
import IconLogout from "../Theme/Icons/Icon.Logout"
import { ThemeComponent } from "@staccx/theme"

export default pages => [
  {
    _id: "wiofdh",
    label: "Ta ut penger",
    icon: <ThemeComponent tagName={"iconArrowUp"} fallback={IconArrowUp} />,
    page: () => pages.withdraw()
  },
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
