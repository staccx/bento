import generatePage from "./generatePageSchema"
export default generatePage({
  name: "productPage",
  title: "Products",
  slugPrefix: "/products/",
  allowSubpages: true
})
