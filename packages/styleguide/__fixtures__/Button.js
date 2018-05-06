import { Button } from "@staccx/base"
import createFixtures from "../src/createFixtures"

export default createFixtures(Button, { children: "Button" }, "subtle")
// export default [
//   {
//     component: Button,
//     themed: false,
//     name: "No theme",
//     props: {
//       children: "Click me",
//       onClick: value => console.log(`Select: ${value}`)
//     }
//   },
//   {
//     component: Button,
//     baseTheme: true,
//     name: "Base Theme",
//     props: {
//       children: "Ordinary",
//       onClick: value => console.log(`Select: ${value}`)
//     }
//   },
//   {
//     component: Button,
//     themed: true,
//     name: "Variant",
//     props: {
//       children: "Variant",
//       variant: "subtle",
//       onClick: value => console.log(`Select: ${value}`)
//     }
//   }
// ]
//
