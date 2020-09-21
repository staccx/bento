import set from "lodash/set"

const setStoryDocumentation = (component, description) => {
  set(component, "story.parameters.docs.storyDescription", description)
  return component
}
export default setStoryDocumentation
