import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const CaretIcon = styled.svg`
  width: 12px;
  transition: fill 0.2s ease;
`

const Caret = ({ className }) => (
  <CaretIcon className={className} viewBox="0 0 24 16">
    <path d="M3.81 0a.54.54 0 0 0-.38.16L.16 3.47a.56.56 0 0 0 0 .78l11.45 11.59a.54.54 0 0 0 .78 0L23.84 4.25a.56.56 0 0 0 0-.78L20.57.17a.54.54 0 0 0-.77 0L12 8.04 4.2.16A.54.54 0 0 0 3.81 0z" />
  </CaretIcon>
)

Caret.propTypes = { className: PropTypes.string }

export default Caret
