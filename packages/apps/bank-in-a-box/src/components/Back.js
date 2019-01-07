import React from "react"
import PropTypes from "prop-types"
import { Button } from "@staccx/base"
import { backwards } from "./transitions/transitions"
import { TranslatedText } from "@staccx/i18n"
import { Link } from "react-router-dom"

const Back = ({ path }) => {
  return (
    <Link
      to={{
        pathname: path,
        state: backwards
      }}
    >
      <Button variant="back">
        <svg width="18" height="8" viewBox="0 0 18 8" fill="none">
          <path
            id="Union"
            d="M3.10334 7.46268L0.239702 4.46268C0.0799006 4.29527 -1.78187e-07 4.07596 -1.68601e-07 3.85666C-1.59015e-07 3.63735 0.0799006 3.41804 0.239702 3.25063L3.10334 0.250628C3.42294 -0.0841935 3.9407 -0.0841935 4.2603 0.250628C4.5799 0.585449 4.5799 1.12786 4.2603 1.46268L2.79332 2.99951L12.2727 2.99951C12.725 2.99951 13.0909 3.38288 13.0909 3.85666C13.0909 4.33043 12.725 4.7138 12.2727 4.7138L2.79332 4.7138L4.2603 6.25063C4.5799 6.58545 4.5799 7.12786 4.2603 7.46268C3.9407 7.7975 3.42294 7.7975 3.10334 7.46268ZM16.3636 3.85666C16.3636 4.33043 16.7296 4.7138 17.1818 4.7138C17.6341 4.7138 18 4.33043 18 3.85666C18 3.38288 17.6341 2.99951 17.1818 2.99951C16.7296 2.99951 16.3636 3.38288 16.3636 3.85666ZM13.9091 3.85666C13.9091 4.33043 14.275 4.7138 14.7273 4.7138C15.1795 4.7138 15.5455 4.33043 15.5455 3.85666C15.5455 3.38288 15.1795 2.99951 14.7273 2.99951C14.275 2.99951 13.9091 3.38288 13.9091 3.85666Z"
            fill="currentColor"
          />
        </svg>
        <span>
          <TranslatedText i18nKey="BackTextButton" fallback="Tilbake" />
        </span>
      </Button>
    </Link>
  )
}

Back.propTypes = {
  account: PropTypes.object.isRequired
}

export default Back
