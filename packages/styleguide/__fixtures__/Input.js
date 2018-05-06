import { CompanyInput,
  CurrencyInput,
  Input,
  NationalIdInput, SliderKeyboardInput, PhoneInput, AccountInput } from "@staccx/base"
import createFixtures from "../src/createFixtures"

export default createFixtures([Input, CurrencyInput, NationalIdInput, SliderKeyboardInput, PhoneInput, AccountInput, CompanyInput], {}, "crazy")

// export default [
//   {
//     component: Input,
//     themed: false,
//     name: "No theme",
//     props: {}
//   },
//   {
//     component: Input,
//     themed: true,
//     name: "Standard",
//     props: {}
//   },
//   {
//     component: Input,
//     themed: true,
//     name: "Variant",
//     props: {}
//   },
//   {
//     component: NationalIdInput,
//     themed: true,
//     props: {}
//   },
//   {
//     component: CompanyInput,
//     themed: true,
//     props: {}
//   },
//   {
//     component: CurrencyInput,
//     themed: true,
//     props: {}
//   },
//   {
//     component: AccountInput,
//     themed: true,
//     props: {}
//   },
//   {
//     component: PhoneInput,
//     themed: true,
//     props: {}
//   },
//   {
//     component: SliderKeyboardInput,
//     themed: true,
//     props: {}
//   }
// ]
