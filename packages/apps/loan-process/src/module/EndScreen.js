import PropTypes from "prop-types"
import React from "react"
import { Box, Wrapper, Heading, Button, Layout, LayoutItem } from "@staccx/base"

const EndScreen = ({
  renderContent,
  bgColor,
  wrapperSize,
  img,
  reverse,
  headingText,
  content,
  buttonContent,
  onClick,
  variant
}) => {
  if (renderContent) {
    return renderContent()
  }

  return (
    <Box variant={variant}>
      <Wrapper size={wrapperSize} variant={variant}>
        <Layout variant={variant}>
          {headingText && (
            <LayoutItem area="heading">
              <Heading variant={variant}>{headingText}</Heading>
            </LayoutItem>
          )}

          {img && <LayoutItem area="image">{img}</LayoutItem>}

          {content && <LayoutItem area="content">{content}</LayoutItem>}

          {buttonContent && (
            <LayoutItem area="button">
              <Button variant={variant} onClick={onClick}>
                {buttonContent}
              </Button>
            </LayoutItem>
          )}
        </Layout>
      </Wrapper>
    </Box>
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
  wrapperSize: PropTypes.string,
  variant: PropTypes.string
}

EndScreen.defaultProps = {
  bgColor: null,
  content: null,
  headingText: null,
  img: null,
  reverse: true,
  wrapperSize: "medium",
  buttonContent: null,
  variant: "endScreen"
}
