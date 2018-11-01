export const phoneMasks = {
  nb: [/[1-9]/, /\d/, /\d/, " ", /\d/, /\d/, " ", /\d/, /\d/, /\d/]
}

export const postalCodeMasks = {
  nb: [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]
}

export const ssnMasks = {
  nb: [
    /[0-9]/,
    /[0-9]/,
    /[0-1]/,
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ]
}

export const accountMasks = {
  nb: { blocks: [4, 2, 5], numericOnly: true, delimiter: "·" }
}
