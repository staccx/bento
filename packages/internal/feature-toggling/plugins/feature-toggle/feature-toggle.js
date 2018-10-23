import environments from "./environments"

export default {
  type: "object",
  name: "featureToggle",
  title: "Feature Toggle",
  fields: [
    {
      type: "reference",
      name: "feature",
      title: "Feature",
      to: [{ type: "feature" }]
    },
    ...environments.map(env => ({
      type: "boolean",
      name: env.value,
      title: env.title
    }))
  ],
  preview: {
    select: {
      title: "feature.name",
      dev: "dev",
      staging: "staging",
      production: "production"
    },
    prepare(selection) {
      const { title, ...rest } = selection
      console.log(rest)
      return {
        title: title,
        subtitle: environments
          .map(env => {
            const val = rest[env.value]
            return `${env.title}: ${val}`
          })
          .join("\n")
      }
    }
  }
}
