import LoadableVisibility from "react-loadable-visibility/react-loadable"
import { Loading } from "@staccx/base"

export const Home = LoadableVisibility({
  loader: () => import("./Home"),
  loading: Loading
})

export const Page = LoadableVisibility({
  loader: () => import("./Page"),
  loading: Loading
})

export const Clients = LoadableVisibility({
  loader: () => import("./Clients"),
  loading: Loading
})

export const Team = LoadableVisibility({
  loader: () => import("./Team"),
  loading: Loading
})

export const Case = LoadableVisibility({
  loader: () => import("./Case"),
  loading: Loading
})

export const Contact = LoadableVisibility({
  loader: () => import("./Contact"),
  loading: Loading
})

export const Jobs = LoadableVisibility({
  loader: () => import("./Jobs"),
  loading: Loading
})

export const Overview = LoadableVisibility({
  loader: () => import("./Overview"),
  loading: Loading
})
