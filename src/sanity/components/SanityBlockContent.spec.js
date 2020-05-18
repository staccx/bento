import React from "react"
import { render, screen } from "@testing-library/react"
import SanityBlockContent from "./SanityBlockContent"

describe("SanityBlockContent", () => {
  const sanityBlock = {
    _key: "78a87c868b40",
    _type: "block",
    children: [
      {
        _key: "78a87c868b400",
        _type: "span",
        marks: [],
        text:
          "Kontoutskriften gir deg nyttige tips og detaljer. Her finner du den og andre dokumenter tilknyttet "
      },
      {
        _key: "78a87c868b401",
        _type: "span",
        marks: ["strong", "em"],
        text: "avtalene"
      },
      {
        _key: "78a87c868b402",
        _type: "span",
        marks: [],
        text: ". "
      },
      {
        _key: "78a87c868b403",
        _type: "span",
        marks: ["602095ff2c06"],
        text: "Link til VG"
      },
      {
        _key: "78a87c868b404",
        _type: "span",
        marks: [],
        text: ""
      }
    ],
    markDefs: [
      {
        _key: "602095ff2c06",
        _type: "link",
        href: "http://vg.no"
      }
    ],
    style: "normal"
  }

  it("should work", () => {
    render(<SanityBlockContent blocks={sanityBlock} />)
  })
  expect(screen.getByText("")).toBeInTheDocument()
})
