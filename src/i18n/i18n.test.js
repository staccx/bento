import React from "react"
import { render, cleanup, waitForElement, act } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import renderer from "react-test-renderer"
import { isBlock } from "./utils"
import { I18nConsumer, Provider } from "./index"

afterEach(cleanup)

const data = {
  _createdAt: "2019-06-19T10:19:01Z",
  _id: "37fd9bcc-100b-42f8-9731-fb9d9675069f",
  _rev: "3IttJ7VKu6Yi5HHVPkhXAY",
  _type: "translations",
  _updatedAt: "2019-06-19T10:19:01Z",
  i18nKey: {
    _type: "slug",
    current: "rik-tekst"
  },
  name: "Rik tekst",
  value: [
    {
      _key: "9c832c54c0fb",
      _type: "localeRichText",
      nb: [
        {
          _key: "42b883c30ffa",
          _type: "block",
          children: [
            {
              _key: "42b883c30ffa0",
              _type: "span",
              marks: [],
              text: "Dette er "
            },
            {
              _key: "42b883c30ffa1",
              _type: "span",
              marks: ["em"],
              text: "rik"
            },
            {
              _key: "42b883c30ffa2",
              _type: "span",
              marks: [],
              text: " "
            },
            {
              _key: "42b883c30ffa3",
              _type: "span",
              marks: ["strong"],
              text: "tekst"
            }
          ],
          markDefs: [],
          style: "normal"
        }
      ]
    }
  ]
}

describe("i18n", () => {
  describe("utils", () => {
    it("isBlock", () => {
      expect(isBlock("test")).toBe(false)
      expect(isBlock(data.value[0].nb[0])).toBe(true)
    })
  })
  describe("Context", () => {
    describe("Provider", () => {
      it("Consumer shows value from provider", () => {
        let tree = null
        act(() => {
          tree = render(
            <Provider language="en">
              <I18nConsumer>
                {value => {
                  console.log(value.ready)
                  return <span>Ready: {value.ready}</span>
                }}
              </I18nConsumer>
            </Provider>
          )
        })
        const { getByText } = tree
        waitForElement(() => getByText(/^Ready:/)).then(wait => {
          expect(wait.textContent).toBe("Ready: true")
        })
      })
    })
  })
  describe("Snapshots", () => {
    it("Normal render", () => {
      let tree = null
      renderer.act(() => {
        tree = renderer.create(
          <Provider language="en">
            <I18nConsumer>
              {value => {
                return <span>Ready: {value.ready}</span>
              }}
            </I18nConsumer>
          </Provider>
        )
      })
      expect(tree.toJSON()).toMatchSnapshot()
    })
  })
})
