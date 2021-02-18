import { baseMask } from "./base"

const defaultLocale = {
  phone: {
    blocks: [3, 2, 3],
    maxLength: 8
  }
}

export const phoneMask = ({ locale = defaultLocale, ...options }) => {
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
