import React, { useRef, useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { parseISO } from "date-fns"
import Label from "../../Label/Label"
import Input from "../Input"
import { applyVariants } from "../../../../theming"
import { themePropTypes } from "../../../../constants/themeContants"

const BirthdateInput = ({
  id,
  name,
  labels,
  variant,
  className,
  autoFocus,
  disabled,
  onKeyDown,
  style,
  label,
  onChange,
  ids,
  names
}) => {
  const dayInput = useRef(null)
  const monthInput = useRef(null)
  const yearInput = useRef(null)
  const [day, setDay] = useState(null)
  const [month, setMonth] = useState(null)
  const [year, setYear] = useState(null)

  const handleDayChange = value => {
    if (value <= 31) {
      setDay(value)
      if (day && value.length === 2) {
        monthInput.current.focus()
      }
    }
  }

  const handleMonthChange = value => {
    if (value <= 12) {
      setMonth(value)
      if (month && value.length === 2) {
        yearInput.current.focus()
      }
    }
  }

  const handleYearChange = value => {
    if (value.length === 4) {
      setYear(value)
    }
  }
  useEffect(() => {
    if (day && month && year) {
      onChange(parseISO(year + month + day))
    }
  }, [day, month, year])

  return (
    <Outer variant={variant} className={className} style={style}>
      {label && <Label id={id}>{label}</Label>}
      <Container variant={variant}>
        <Input
          label={labels && labels[0] && labels[0]}
          placeholder="dd"
          id={ids ? (ids[0] ? ids[0] : `${id}Day`) : `${id}Day`}
          name={names ? (names[0] ? names[0] : `${name}Day`) : `${name}Day`}
          type="tel"
          ref={dayInput}
          value={day || ""}
          onChange={e => handleDayChange(e.target.value)}
          variant={variant}
          autoFocus={autoFocus}
          disabled={disabled}
          onKeyDown={onKeyDown}
          aria-labelledby={label && id}
        />
        <Input
          label={labels && labels[1] && labels[1]}
          placeholder="mm"
          id={ids ? (ids[1] ? ids[1] : `${id}Month`) : `${id}Month`}
          name={`${name}Month`}
          type="tel"
          ref={monthInput}
          value={month || ""}
          onChange={e => handleMonthChange(e.target.value)}
          variant={variant}
          disabled={disabled}
          onKeyDown={onKeyDown}
          aria-labelledby={label && id}
        />
        <Input
          label={labels && labels[2] && labels[2]}
          placeholder="yyyy"
          id={ids ? (ids[2] ? ids[2] : `${id}Year`) : `${id}Year`}
          name={`${name}Year`}
          type="tel"
          ref={yearInput}
          value={year || ""}
          onChange={e => handleYearChange(e.target.value)}
          variant={variant}
          disabled={disabled}
          onKeyDown={onKeyDown}
          aria-labelledby={label && id}
          options={{ blocks: [4], numericOnly: true }}
        />
      </Container>
    </Outer>
  )
}

BirthdateInput.themeProps = {
  outer: {
    name: "BIRTHDATE_INPUT_OUTER_STYLE",
    description: "Outer style",
    type: themePropTypes.style
  },
  container: {
    name: "BIRTHDATE_INPUT_CONTAINER_STYLE",
    description: "Container style",
    type: themePropTypes.style
  }
}

const Outer = styled.div`
  ${applyVariants(BirthdateInput.themeProps.outer)};
`

const Container = styled.div`
  display: flex;
  ${applyVariants(BirthdateInput.themeProps.container)};
`

BirthdateInput.propTypes = {
  variant: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onComplete: PropTypes.func,
  ids: PropTypes.array.isRequired,
  labels: PropTypes.array
}

BirthdateInput.defaultProps = {}

export default BirthdateInput
