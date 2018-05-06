export default (components, props, variant) => {
  if (!Array.isArray(components)) {
    components = [components]
  }
  return components
    .map(component => [
      {
        component: component,
        themed: false,
        name: "No theme",
        props
      },
      {
        component: component,
        baseTheme: true,
        name: "Base Theme",
        props
      },
      {
        component: component,
        themed: true,
        name: "Other Theme",
        props
      },
      {
        component: component,
        themed: true,
        name: "Variant",
        props: {
          variant,
          ...props
        }
      }
    ])
    .flatten()
}
