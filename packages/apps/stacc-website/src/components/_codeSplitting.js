import { lazy } from "react"

export const Typeform = lazy(() => import("../components/Typeform/Typeform"))

export const Trinity = lazy(() => import("../components/Trinity/Trinity"))

export const ContactUs = lazy(() => import("../components/ContactUs/ContactUs"))

export const Quote = lazy(() => import("../components/Quote/Quote"))

export const SectionHead = lazy(() => import("./SectionHead/SectionHead"))

export const Hero = lazy(() => import("./Hero/Hero"))
export const ContentLinks = lazy(() => import("./ContentLinks/ContentLinks"))
export const FeatureList = lazy(() => import("./FeatureList/FeatureList"))

export const Stories = lazy(() => import("./Stories/Stories"))

export const Timeline = lazy(() => import("./Timeline/Timeline"))

export const ClientPreview = lazy(() => import("./ClientPreview/ClientPreview"))

export const NavigationSubpage = lazy(() =>
  import("./NavigationSubpage/NavigationSubpage")
)

export const Footer = lazy(() => import("./Footer/Footer"))

export const Header = lazy(() => import("./Header/Header"))

export const Story = lazy(() => import("./Stories/Stories.Story"))

export const Person = lazy(() => import("./Person/Person"))

export const PeopleList = lazy(() => import("./PeopleList/PeopleList"))

export const ClientList = lazy(() => import("./ClientList/ClientList"))

export const ImageFullWidth = lazy(() =>
  import("./ImageFullWidth/ImageFullWidth")
)
