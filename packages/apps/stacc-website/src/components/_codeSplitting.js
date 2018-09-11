import LoadableComponents from "react-loadable-visibility/loadable-components"
import { Loading } from "@staccx/base"

export const Quote = LoadableComponents(
  () => import("../components/Quote/Quote"),
  {
    loading: Loading
  }
)

export const SectionHead = LoadableComponents(
  () => import("./SectionHead/SectionHead"),
  {
    loading: Loading
  }
)

export const Hero = LoadableComponents(() => import("./Hero/Hero"), {
  loading: Loading
})
export const ContentLinks = LoadableComponents(
  () => import("./ContentLinks/ContentLinks"),
  {
    loading: Loading
  }
)
export const FeatureList = LoadableComponents(
  () => import("./FeatureList/FeatureList"),
  {
    loading: Loading
  }
)

export const Stories = LoadableComponents(() => import("./Stories/Stories"), {
  loading: Loading
})

export const Timeline = LoadableComponents(
  () => import("./Timeline/Timeline"),
  {
    loading: Loading
  }
)

export const ClientPreview = LoadableComponents(
  () => import("./ClientPreview/ClientPreview"),
  {
    loading: Loading
  }
)

export const NavigationSubpage = LoadableComponents(
  () => import("./NavigationSubpage/NavigationSubpage"),
  {
    loading: Loading
  }
)

export const Footer = LoadableComponents(() => import("./Footer/Footer"), {
  loading: Loading
})

export const Header = LoadableComponents(() => import("./Header/Header"), {
  loading: Loading
})

export const Story = LoadableComponents(
  () => import("./Stories/Stories.Story"),
  {
    loading: Loading
  }
)

export const Person = LoadableComponents(() => import("./Person/Person"), {
  loading: Loading
})
