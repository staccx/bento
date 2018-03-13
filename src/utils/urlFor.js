import imageUrlBuilder from "@sanity/image-url"

// Get a pre-configured url-builder from your sanity client
let builder = null

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export default (client, source) => {
  if (!builder) {
    builder = imageUrlBuilder(client)
  }
  return builder.image(source)
}
