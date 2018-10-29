import React from "react"
import { theming } from "@staccx/base"

const Profile = () => (
  <svg
    width="16"
    height="18"
    viewBox="0 0 16 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 0C5.35625 0 3.2 2.20526 3.2 4.90909C3.2 7.61293 5.35625 9.81818 8 9.81818C10.6438 9.81818 12.8 7.61293 12.8 4.90909C12.8 2.20526 10.6438 0 8 0ZM8 9.81818C3.59375 9.81818 0 13.4936 0 18H1.6C1.6 14.3757 4.45625 11.4545 8 11.4545C11.5438 11.4545 14.4 14.3757 14.4 18H16C16 13.4936 12.4062 9.81818 8 9.81818ZM8 1.63636C9.775 1.63636 11.2 3.09375 11.2 4.90909C11.2 6.72443 9.775 8.18182 8 8.18182C6.225 8.18182 4.8 6.72443 4.8 4.90909C4.8 3.09375 6.225 1.63636 8 1.63636Z"
      fill="#343C49"
    />
  </svg>
)

export const ProfileIcon = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: Profile },
  "Profile"
)

export default Profile
