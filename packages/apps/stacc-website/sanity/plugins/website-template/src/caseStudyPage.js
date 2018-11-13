import generatePageSchema from "./generatePageSchema"

const page = generatePageSchema({
  name: "caseStudyPage",
  title: "Case Study Page",
  allowSubpages: null,
  slugPrefix: "/clients/case-study/",
  slugSource: "caseStudies[0].name",
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
