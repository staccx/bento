import React from "react"
import IconArrowUp from "../Theme/Icons/Icon.ArrowUp"
import IconArrowDown from "../Theme/Icons/Icon.ArrowDown"
import IconProfile from "../Theme/Icons/Icon.Profile"
import IconInbox from "../Theme/Icons/Icon.Inbox"
import IconLogout from "../Theme/Icons/Icon.Logout"
import { ThemeComponent } from "@staccx/theme"
import { NewBadge } from "@staccx/base"

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
    icon: <ThemeComponent tagName={"iconProfile"} fallback={IconProfile} />,
    page: () => pages.profile()
  },
  {
    _id: "asdasd22",
    label: "Innboks",
    icon: (
      <NewBadge number={1}>
        <ThemeComponent tagName={"iconInbox"} fallback={IconInbox} />
      </NewBadge>
    ),
    page: () => pages.inbox()
  },
  {
    _id: "fugya",
    label: "Logg ut",
    icon: <ThemeComponent tagName={"iconLogout"} fallback={IconLogout} />
  }
]
