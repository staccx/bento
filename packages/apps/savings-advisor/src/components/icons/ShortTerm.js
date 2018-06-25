import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Icon = styled.svg`
  width: 92px;
  transition: fill 0.2s ease;
`

const ShortTerm = ({ className }) => (
  <Icon className={className} viewBox="0 0 92 73">
    <g fill="none" fillRule="evenodd">
      <g>
        <path
          fill="#F44336"
          fillRule="nonzero"
          d="M57.5 42.17s0 5.46 1.15 8.05c1.16 2.59 3.72 3.45 6.9 3.45h18.4c3.18 0 5.76-.86 6.91-3.45C92 47.63 92 42.17 92 42.17H57.5zm34.5 0c-1.79-2.59-1.68-4.28-1.68-7.5 0 0-.01-.93-.23-1.33a1.93 1.93 0 0 0-1.92-.97c-4.08-1.2-4.62-5.1-4.62-5.1a1.88 1.88 0 0 0-2.92-1.38l-.07-.03a6.25 6.25 0 0 1-5.96-1.7 1.92 1.92 0 0 0-3.68.76v17.25H92z"
        />
        <path
          fill="#455A64"
          fillRule="nonzero"
          d="M90.85 50.22l.15-.39H58.5l.15.39A5.34 5.34 0 0 0 62 53.16c1.16.33 2.39.5 3.54.5h18.4c1.16 0 2.39-.17 3.54-.5a5.27 5.27 0 0 0 3.36-2.94z"
        />
        <path
          stroke="#90A4AE"
          strokeLinecap="round"
          strokeWidth="2"
          d="M57.5 34.5l29.1 29.43m-19.94.81L76.89 54.2"
        />
        <path
          fill="#FFB74D"
          fillRule="nonzero"
          d="M13.42 15.33a7.67 7.67 0 1 1 0-15.34 7.67 7.67 0 0 1 0 15.34"
        />
        <path
          fill="#607D8B"
          fillRule="nonzero"
          d="M0 32.58V46l5.03 3.35 2.64 23.48h11.5l2.63-23.48L26.83 46V32.58a13.42 13.42 0 0 0-26.83 0m86.25 40.25a5.76 5.76 0 0 1 0-11.5 5.76 5.76 0 0 1 0 11.5zm-21.08 0a5.76 5.76 0 0 1 0-11.5 5.76 5.76 0 0 1 0 11.5z"
        />
        <path
          fill="#263238"
          fillRule="nonzero"
          d="M88.16 67.1a1.91 1.91 0 1 1-1.9-1.92c1.05 0 1.9.85 1.9 1.91zm-21.08-.02a1.92 1.92 0 1 1-3.83 0 1.92 1.92 0 0 1 3.83 0z"
        />
        <path
          fill="#D32F2F"
          fillRule="nonzero"
          d="M70.92 42.17H92a8.16 8.16 0 0 1-1.55-3.84l-19.53 3.84z"
        />
        <path
          fill="#FFB74D"
          fillRule="nonzero"
          d="M36.42 15.33a7.67 7.67 0 1 1 0-15.34 7.67 7.67 0 0 1 0 15.34M23 32.58V46l5.03 3.35 2.64 23.48h11.5l2.63-23.48L49.83 46V32.58a13.42 13.42 0 0 0-26.83 0"
        />
        <path
          fill="#E91E63"
          fillRule="nonzero"
          d="M23 55.58s2.49 4.47 13.42 4.47 13.41-4.47 13.41-4.47l-5.67-23h5.67c0-8.02-5.98-13.41-13.41-13.41-7.44 0-13.42 5.4-13.42 13.41h5.66l-5.66 23z"
        />
      </g>
    </g>
  </Icon>
)

ShortTerm.propTypes = { className: PropTypes.string }

export default ShortTerm
