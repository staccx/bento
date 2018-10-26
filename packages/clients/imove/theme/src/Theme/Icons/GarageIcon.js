import React from "react"
import { registerStyle, VARIANT_DEFAULT } from "@staccx/theme"

const Garage = () => (
  <svg
    width="26"
    height="22"
    viewBox="0 0 26 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 0L0.625 5.15625L0 5.4375V21.0938H2V6.78125L13 2.1875L24 6.78125V21.0938H26V5.4375L25.375 5.15625L13 0ZM8.5 6.09375C7.15625 6.09375 6.07812 7.03125 5.65625 8.15625V8.1875L4.25 12.4688L4.34375 12.5C4.18359 12.8555 4 13.2695 4 13.4062V17.0938C4 17.6172 4.18359 18.1523 4.5625 18.5312C4.69141 18.6602 4.84375 18.7578 5 18.8438V20.0938C5 20.6953 5.39844 21.0938 6 21.0938C6.60156 21.0938 7 20.6953 7 20.0938V19.0938H19V20.0938C19 20.6953 19.3984 21.0938 20 21.0938C20.6016 21.0938 21 20.6953 21 20.0938V18.8438C21.1562 18.7578 21.3086 18.6602 21.4375 18.5312C21.8164 18.1523 22 17.6172 22 17.0938V13.4062C22 13.2305 21.9609 12.8477 21.8125 12.4688H21.8438L20.4375 8.1875V8.15625C20.0156 7.03125 18.9375 6.09375 17.5938 6.09375H8.5ZM8.5 8.09375H17.5938C18.0508 8.09375 18.3828 8.36719 18.5625 8.84375L19.2812 11.0938H6.8125L7.5625 8.8125C7.74609 8.36719 8.0625 8.09375 8.5 8.09375ZM6.15625 13.0938H19.9375L19.9688 13.1875L20 13.25C19.9805 13.2109 20 13.207 20 13.4062V17.0938H6V13.4062L6.0625 13.3438L6.15625 13.0938ZM8 14.0938C7.44922 14.0938 7 14.543 7 15.0938C7 15.6445 7.44922 16.0938 8 16.0938C8.55078 16.0938 9 15.6445 9 15.0938C9 14.543 8.55078 14.0938 8 14.0938ZM18 14.0938C17.4492 14.0938 17 14.543 17 15.0938C17 15.6445 17.4492 16.0938 18 16.0938C18.5508 16.0938 19 15.6445 19 15.0938C19 14.543 18.5508 14.0938 18 14.0938Z"
      fill="#343C49"
    />
  </svg>
)

export const GarageIcon = registerStyle({ [VARIANT_DEFAULT]: Garage }, "Garage")

export default Garage