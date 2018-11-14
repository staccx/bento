import generatePageSchema from "./generatePageSchema"

const page = generatePageSchema({
  name: "caseStudyPage",
  title: "Case Study Pages",
  allowSubpages: null,
  slugPrefix: "/clients/case-study/",
  slugSource: "name",
  additionalFields: [
    {
      type: "sectionHead",
      name: "header",
      title: "Header"
    }
  ]
})

page.type = "object"

export default page
