import PropTypes from "prop-types"
import React from "react"
import Floor from "./replace/Floor"
import { Wrapper, Heading, Flag, Button } from "@staccx/base"

const EndScreen = ({
  renderContent,
  bgColor,
  size,
  img,
  reverse,
  headingText,
  content,
  buttonContent,
  onClick
}) => {
  if (renderContent) {
    return renderContent()
  }

  return (
    <Floor background={bgColor}>
      <Wrapper size={size}>
        <Flag large responsive={800} img={img} reverse={reverse}>
          <Heading>{headingText}</Heading>
          {content && content}
          {buttonContent && (
            <Button variant="subtle" onClick={onClick}>
              {buttonContent}
            </Button>
          )}
        </Flag>
      </Wrapper>
    </Floor>
  )
}

export default EndScreen

EndScreen.propTypes = {
  bgColor: PropTypes.string,
  buttonContent: PropTypes.any,
  content: PropTypes.any,
  headingText: PropTypes.string,
  img: PropTypes.any,
  onClick: PropTypes.func,
  renderContent: PropTypes.func,
  reverse: PropTypes.bool,
  size: PropTypes.string
}

EndScreen.defaultProps = {
  bgColor: "#FF3131",
  content: <div>content</div>,
  headingText: "Tar lang tid/Avlått osv",
  img: <img src="http://placehold.it/200x200" alt={"placeholder"} />,
  reverse: true,
  size: "medium",
  buttonContent: <span>Click me</span>
}
