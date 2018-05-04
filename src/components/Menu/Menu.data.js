import React from "react"
import IconArrowUp from "../Icons/Icon.ArrowUp"
import IconArrowDown from "../Icons/Icon.ArrowDown"
import IconProfile from "../Icons/Icon.Profile"
import IconLogout from "../Icons/Icon.Logout"
import { ThemeComponent } from "@staccx/theme"

export default pages => [
  {
    _id: "eiwfohug",
    label: "Sett inn penger",
    icon: <ThemeComponent tagName={"iconArrowDown"} fallback={IconArrowDown} />,
    page: () => pages.deposit()
  },
  {
    _id: "wiofdh",
    label: "Ta ut penger",
    icon: <ThemeComponent tagName={"iconArrowUp"} fallback={IconArrowUp} />,
    page: () => pages.withdraw()
  },
  {
    _id: "sioahugcf",
    label: "Min profil",
    icon: <ThemeComponent tagName={"iconProfile"} fallback={IconProfile} />
  },
  {
    _id: "fugya",
    label: "Logg ut",
    icon: <ThemeComponent tagName={"iconLogout"} fallback={IconLogout} />
  }
]
