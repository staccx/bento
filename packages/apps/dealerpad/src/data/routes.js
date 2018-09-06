import React from "react"
import Home from "../pages/Home"
import NewCase from "../pages/NewCase"
import MySales from "../pages/MySales"
import Case from "../pages/Case"
import UnderConstruction from "../pages/UnderConstruction"

const routes = [
  {
    path: "/overview",
    component: Home,
    name: "Oversikt",
    icon: "News",
    exact: true,
    _id: "dfs4355jkl",
    inMenu: true
  },
  {
    path: "/new-case",
    component: NewCase,
    name: "Registrer sak",
    icon: "Add",
    exact: true,
    _id: "54hgklnkl564",
    inMenu: true
  },
  {
    path: "/my-sales",
    component: MySales,
    name: "Mine salg",
    icon: "Alert",
    exact: true,
    _id: "dsdsree4",
    inMenu: true
  },
  {
    path: "/sales/:caseId",
    component: Case,
    name: "CASE",
    icon: <i />,
    exact: false,
    _id: "43gh44",
    inMenu: false
  },
  {
    path: "/working",
    component: UnderConstruction,
    name: "UnderConstruction",
    icon: <i />,
    exact: true,
    _id: "fdsfsd454545",
    inMenu: false
  }
]

export default routes
