import { baseMask } from "./base"

export const phoneMask = ({ locale = "NO", ...options }) => {
  const config = {
    ...options,
    ...(locale?.phone
      ? { ...locale.phone }
      : {
          blocks: [2, 2, 2, 2],
          maxLength: 8
        }),
    pattern: /[^0-9]+/gi,
    name: "Phone mask"
  }

  return baseMask(config)
}
