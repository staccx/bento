export default function resolveProductionUrl(document) {
  return `localhost:3000/preview/${document._id}`
}
