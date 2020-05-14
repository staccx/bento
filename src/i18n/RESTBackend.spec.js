/**
 * @jest-environment node
 */
// INTEGRATION TEST
import RESTBackend from "./RESTBackend"
import { i18nLogger } from "./I18n"
import { normalizeLevel } from "../utils/loglevelUtils"

const wait = (delay = 1000) =>
  new Promise(resolve => setTimeout(resolve, delay))

let level = null
describe.skip("Rest backend for i18n", () => {
  beforeAll(() => {
    level = i18nLogger.getLevel()
    i18nLogger.setLevel(normalizeLevel(5))
  })
  afterAll(() => {
    i18nLogger.setLevel(level)
  })
  it("Should get response from server", async () => {
    RESTBackend.init(
      {},
      {
        rest: {
          url: "http://localhost:5000/sanity/i18n"
        }
      }
    )
    let result = null
    const callback = (error, resources) => {
      if (error) {
        throw error
      }
      result = resources
    }
    RESTBackend.read("nb", null, callback)
    await wait()
    expect(result).not.toBeNull()
  })
})
