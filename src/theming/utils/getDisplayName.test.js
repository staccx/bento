import { getDisplayName } from "./getDisplayName";
import { RadioPill } from "../../components";

describe("Get display name for component", () => {
  it("Should show name for component", () => {
    expect(getDisplayName(RadioPill)).toBe("RadioPill")
    }
  )

})
