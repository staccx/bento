import Overview from "../pages/Overview"
import Services from "../pages/Services"
import Clients from "../pages/Clients"
import Jobs from "../pages/Jobs"
import About from "../pages/About"
import Contact from "../pages/Contact"

const routes = [
  {
    path: "/",
    component: Overview,
    name: "Overview",
    exact: true,
    _id: "dfs4355jkl",
    inMenu: true
  },
  {
    path: "/services",
    component: Services,
    name: "Services",
    exact: true,
    _id: "fgdguånkl32",
    inMenu: true
  },
  {
    path: "/clients",
    component: Clients,
    name: "Clients",
    exact: true,
    _id: "dvsklj434554nkl",
    inMenu: true
  },
  {
    path: "/jobs",
    component: Jobs,
    name: "Jobs",
    exact: true,
    _id: "324234hjkln,n",
    inMenu: true
  },
  {
    path: "/about",
    component: About,
    name: "About",
    exact: true,
    _id: "4rmvdpdsfj",
    inMenu: true
  },
  {
    path: "/contact",
    component: Contact,
    name: "Get in touch",
    exact: true,
    _id: "4rmvdpdsfj",
    inMenu: true
  }
]

export default routes
