import { baseMask } from "./base"

// const locales = {
//   NO: {
//     type: "BBAN",
//     blocks: [4, 2, 5],
//     maxLength: 11,
//     pattern: /[^0-9]+/gi
//   },
//   DK: {
//     type: "BBAN",
//     blocks: [4, 9],
//     maxLength: 13,
//     pattern: /[^0-9]+/gi
//   },
//   SE: {
//     type: "BBAN",
//     blocks: [4, 2, 4, 1],
//     maxLength: 19,
//     pattern: /[^0-9]+/gi
//   },
//   FI: {
//     type: "IBAN",
//     blocks: [4, 4, 4, 2],
//     maxLength: 14,
//     prefix: "FI",
//     pattern: /[^0-9]+/gi
//   }
// }
export const accountMask = ({ locale = "NO", ...options }) => {
  const config = {
    ...options,
    name: "Account mask"
  }

  return baseMask({
    ...config,
    ...(locale.account || {})
  })
}
