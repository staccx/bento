import React from "react"
import { ThemeComponent } from "@staccx/theme"

export default pages => [
  {
    _id: "wiofdh",
    label: "Ta ut penger",
    icon: <ThemeComponent tagName={"iconArrowUp"} />,
    page: () => pages.withdraw()
  },
  {
    _id: "sioahugcf",
    label: "Min profil",
    icon: <ThemeComponent tagName={"iconProfile"} />,
    page: () => pages.profile()
  },
  {
    _id: "fugya",
    label: "Logg ut",
    icon: <ThemeComponent tagName={"iconLogout"} />
  }
]
