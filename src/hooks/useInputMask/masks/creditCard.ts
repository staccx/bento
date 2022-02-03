import { baseMask, resolveBlocks } from "./base"
import { MaskOptions } from "./_types"

// TODO: Add more cards
const creditCards = [
  {
    name: "American Express",
    code: "AMEX",
    startDigits: [34, 37],
    blocks: [4, 6, 5],
    maxLength: 15
  },
  {
    name: "Visa",
    code: "VISA",
    startDigits: [4],
    blocks: [4, 4, 4, 4],
    maxLength: 16
  },
  {
    name: "Mastercard",
    code: "MASTERCARD",
    startDigits: [51, 52, 53, 54, 55], // missing a range
    blocks: [4, 4, 4, 4],
    maxLength: 16
  },
  {
    name: "Discover",
    code: "DISCOVER",
    startDigits: [6011, 65, 644, 645, 646, 647, 648, 649], // missing a range
    blocks: [4, 4, 4, 4]
  }
]

const matchCard = (input: any) => {
  if (!input) {
    return null
  }
  return creditCards.find(c =>
    c.startDigits.some(digit => input.startsWith(digit.toString()))
  )
}

export const creditCardMask = (options: MaskOptions) => {
  const config: MaskOptions = {
    ...options,
    pattern: /[^0-9]+/gi
  }

  return baseMask({
    ...config,
    prepareConfig: (config, input) => {
      const card = matchCard(input)
      if (card) {
        return {
          ...config,
          mask: resolveBlocks(card?.blocks)
        }
      }
      return config
    },
    settle: (value, config) => {
      const card = matchCard(value)
      return {
        value,
        ...(card && { card: { name: card.name } })
      }
    },
    name: "Credit card mask"
  })
}
