import generatePage from "./generatePageSchema"
export default generatePage({
  name: "productPage",
  title: "Product",
  slugPrefix: "/products/",
  allowSubpages: true
})
