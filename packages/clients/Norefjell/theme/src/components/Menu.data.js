import React from "react"
import { ThemeComponent } from "@staccx/theme"
import { NewBadge } from "@staccx/base"

export default pages => [
  {
    _id: "eiwfohug",
    label: "Sett inn penger",
    icon: <ThemeComponent tagName={"iconArrowDown"} />,
    page: () => pages.deposit()
  },
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
    _id: "asdasd22",
    label: "Innboks",
    icon: (
      <NewBadge number={1}>
        <ThemeComponent tagName={"iconInbox"} />
      </NewBadge>
    ),
    page: () => pages.inbox()
  },
  {
    _id: "fugya",
    label: "Logg ut",
    icon: <ThemeComponent tagName={"iconLogout"} />
  }
]
