import PropTypes from "prop-types"
import styled from "styled-components"
// import i18next from "i18next"
// import { i18nLogger, useI18n } from "../I18n"
// import { getComponent, handleArray } from "../utils"
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
  for (const [key, value] of Object.entries(list)) {
    if (key === i18n) {
      return value
    }
  }
}

const Translate = ({ children, value, i18n, allLangs }) => {
  const [isOpen, setIsOpen] = useState(false)
  // const [value, valueSet] = useState(children ?? null)

  // useEffect(() => {
  //   if (!i18next.isInitialized) return

  //   let result = null
  //   if (Array.isArray(i18n)) {
  //     i18nLogger.debug("Handling i18n key is array")
  //     result = handleArray(i18n, data, children, translate)
  //   } else {
  //     result = translate(i18n, children, data)
  //   }
  //   valueSet(result)
  // }, [i18next, i18n, translate, language])

  // if (Array.isArray(value)) {
  //   i18nLogger.debug("Handling value is array")
  //   return value.map(getComponent)
  // }

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
      {value}

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

Translate.propTypes = {
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

Translate.defaultProps = {}

export default Translate

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
