import PropTypes from "prop-types"
import styled from "styled-components"
import React, { useState } from "react"

/**
 * Jsx Component for translating
 * @param children
 * @param i18n
 * @param data
 * @returns {null|*}
 * @constructor
 */
const getValue = (i18n, list) => {
  for (let [key, value] of Object.entries(list)) {
    if (Array.isArray(value) && key === i18n) {
      let text = []
      value.map(itm => {
        itm.children.forEach(child => {
          text = [...text, child.text]
        })
        value = text.join("")
        return value
      })
    }
    if (!Array.isArray(value) && key === i18n) {
      return value
    }
  }
}

const TranslateDebug = ({ children, value, i18n, allLangs }) => {
  const [isOpen, setIsOpen] = useState(false)
  let formatValue = value

  if (Array.isArray(value)) {
    if (Array.isArray(value[0].children)) {
      let text = []
      value.forEach(itm => {
        itm.children.forEach(child => {
          text = [...text, child.text]
        })
        formatValue = text.join("")
      })
    }
  }

  let list = []

  if (allLangs) {
    for (const [key, value] of Object.entries(allLangs)) {
      for (const [, value1] of Object.entries(value)) {
        list = [
          ...list,
          {
            lang: key,
            list: value1
          }
        ]
      }
    }
  }
  return (
    <DebugOuter data-i18nkey={children}>
      {formatValue}
      <DebugInfo>
        <DebugKey onClick={() => setIsOpen(!isOpen)}>
          <KeyWrapper>
            {i18n}
            <DetailsButton onClick={() => setIsOpen(!isOpen)}>↓</DetailsButton>
          </KeyWrapper>
        </DebugKey>
      </DebugInfo>

      <DebugList isOpen={isOpen}>
        <FallbackWrapper>
          <strong>Fallback: </strong> {children}
        </FallbackWrapper>
        {list.map((lang, index) => (
          <DebugSpan key={1 + index}>
            <strong>{lang.lang}</strong> {getValue(i18n, lang.list)}
          </DebugSpan>
        ))}
      </DebugList>
    </DebugOuter>
  )
}

TranslateDebug.propTypes = {
  /**
   * Children will in this case work as a fallback
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.func
  ]).isRequired,
  /**
   * Key to look in the store
   */
  i18n: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  /**
   * Data provided in case of interpolation or custom input
   */
  data: PropTypes.object
}

TranslateDebug.defaultProps = {}

export default TranslateDebug

const DebugOuter = styled.span`
  position: relative;
`

const DebugInfo = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

const DebugKey = styled.span`
  display: block;
  transform: translate(100%, -50%);
  background-color: #fff;
  color: #000;
  border: 1px solid black;
  padding: 0;
  font-size: 10px;
`

const DebugList = styled.div`
  display: ${p => (p.isOpen ? "block" : "none")};
  position: absolute;
  z-index: 500;
  background-color: #fff;
  color: #000;
  border: 1px solid black;
  padding: 3px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  font-size: 12px;
  min-width: 200px;
`

const DebugSpan = styled.div``

const KeyWrapper = styled.div`
  display: flex;
`

const DetailsButton = styled.button`
  border: 0;
  outline: 0;
  padding: 0 3px;
  background: transparent;
`

const FallbackWrapper = styled.div`
  white-space: normal;
`
