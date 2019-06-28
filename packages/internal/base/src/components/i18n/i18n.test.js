import React from "react"
// import Text from "../Text/Text/Text"
import { render, cleanup, waitForElement } from "@testing-library/react"
import "jest-dom/extend-expect"
import { isBlock } from "./utils"
import {
  // withI18n,
  I18nConsumer,
  // SanityBackend,
  // useI18n,
  Provider
  // Translate,
  // Transform
} from "./index"

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
      it("Consumer shows value from provider", async () => {
        const tree = (
          <Provider value="C3P0" language={"en"}>
            <I18nConsumer>
              {value => {
                console.log(value)
                return <span>Received: {value}</span>
              }}
            </I18nConsumer>
          </Provider>
        )
        const { getByText } = render(tree)
        const wait = await waitForElement(() => getByText(/^Received:/))
        expect(wait.textContent).toBe("Received: Boba Fett")
      })
    })
  })
})
