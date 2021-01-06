import PropTypes from "prop-types"
import styled from "styled-components"
import i18next from "i18next"
import { i18nLogger, useI18n } from "../I18n"
import { getComponent, handleArray } from "../utils"
import React, { useEffect, useState } from "react"

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

const Translate = ({ children, i18n, data }) => {
  const { translate, language, debug } = useI18n()
  const all = useI18n()
  let list = []
  const allLangs = all.i18n.options.resources
  const [value, valueSet] = useState(children ?? null)
  useEffect(() => {
    if (!i18next.isInitialized) return

    let result = null
    if (Array.isArray(i18n)) {
      i18nLogger.debug("Handling i18n key is array")
      result = handleArray(i18n, data, children, translate)
    } else {
      result = translate(i18n, children, data)
    }
    valueSet(result)
  }, [i18next, i18n, translate, language])

  if (Array.isArray(value)) {
    i18nLogger.debug("Handling value is array")
    return value.map(getComponent)
  }
  if (debug === true) {
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
      <div>
        {value}
        <DebugDiv>
          <h3>Debug panel:</h3>
          <p>
            <strong>Key: </strong> {i18n}
          </p>
          <p>
            <strong>Fallback: </strong> {children}
          </p>
          {list.map((lang, index) => (
            <DebugSpan key={1 + index}>
              <p>
                <strong>lang:</strong> {lang.lang}
              </p>
              <p>
                <strong>value:</strong> {getValue(i18n, lang.list)}
              </p>
            </DebugSpan>
          ))}
        </DebugDiv>
      </div>
    )
  }
  i18nLogger.debug("Key:", i18n, "resolved to:", value)
  return value
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

const DebugDiv = styled.div`
  border: 1px solid black;
  padding: 10px;
`

const DebugSpan = styled.span`
  border: 1px solid black;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  padding: 10px;
`
