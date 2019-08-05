// We need to have react as there is jsx 👇
import React from "react"
// storiesOf create the stories we need
import { storiesOf } from "@storybook/react"
// Import you component(s)
import Button from "./Button"

// NOTE: Please try to test as many permutations and use cases as possible. There is no limit to stories

/**
 * You can also write helper components here
 * const SomethingWithState = () => {
 *   const [field, setField] = useState(null)
 *
 *   return (
 *     <Wrapper>
 *       <MyComponent someProps={field} />
 *         <Button onChange={() => setField(someValue)}>Do stuff<Button
 *       </Wrapper>
 *   )
 * }
 */


// Write stories. Use | to place in category and / to create hiearchy
storiesOf("Components|Base/Button", module).add("No props", () => (
  <Button>Button</Button>
))
