import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Icon = styled.svg`
  width: 92px;
  transition: fill 0.2s ease;
`

const Pension = ({ className }) => (
  <Icon className={className} viewBox="0 0 92 95">
    <g fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <polygon
          fill="#CFD8DC"
          points="38.737 21.789 43.579 21.789 43.579 94.421 38.737 94.421"
        />
        <polygon
          fill="#B0BEC5"
          points="38.737 21.789 43.579 21.789 43.579 48.421 38.737 48.421"
        />
        <path
          fill="#5D4037"
          d="M80.02 83.08l-4.84-14.52 4.6-1.54 4.83 14.53-4.6 1.53zm-72.76-.76v12.1h7.27v-12.1H7.26zm70.21 0v12.1h7.27v-12.1h-7.27z"
        />
        <polygon
          fill="#00BCD4"
          points="0 31.474 41.158 3.026 82.316 31.474 58.105 38.737 24.211 38.737"
        />
        <polygon
          fill="#80DEEA"
          points="24.211 38.737 41.158 3.026 58.105 38.737"
        />
        <path
          fill="#00838F"
          d="M43.58 4.84h-4.84V2.42a2.43 2.43 0 0 1 4.84 0v2.42z"
        />
        <path
          fill="#FF9800"
          d="M68.75 53.75a7.27 7.27 0 0 0-10.16-1.46l-14.53 10.9c-.37.28-.7.59-1 .92l-11.64-9.98a3.63 3.63 0 0 0-4.94.2l-12.1 12.1a3.63 3.63 0 1 0 5.13 5.13l9.73-9.72 13.3 11.39.07.13a7.24 7.24 0 0 0 10.17 1.45l14.53-10.9a7.26 7.26 0 0 0 1.44-10.16z"
        />
        <path
          fill="#FFE0B2"
          d="M91.72 58.1l-4.6-5.46a4.84 4.84 0 0 0-6.82-.72L53.87 72.63H4.84A4.84 4.84 0 0 0 0 77.47v4.85h58.1l5.3-2.43 28.32-21.78z"
        />
        <polygon
          fill="#8D6E63"
          points="64.054 79.895 91.962 58.38 88.87 54.653 56.119 79.895 0 79.895 0 84.737 92 84.737 92 79.895"
        />
        <polygon
          fill="#3F51B5"
          points="41.158 65.368 41.158 72.632 53.868 72.632 47.627 60.64"
        />
        <path
          fill="#FFB74D"
          d="M75.05 38.74a7.27 7.27 0 1 1 0 14.53 7.27 7.27 0 0 1 0-14.53zm-19.93 33.1l11.3-9.04a3.64 3.64 0 1 0-4.53-5.67l-8.4 6.73-3.26-4.1a3.62 3.62 0 1 0-6.04 4.03l5.64 7.23a3.6 3.6 0 0 0 5.29.82zm-13.96-6.47H8.47c-2 0-3.63 1.63-3.63 3.63s1.64 3.63 3.63 3.63h32.69v-7.26z"
        />
      </g>
    </g>
  </Icon>
)

Pension.propTypes = { className: PropTypes.string }

export default Pension
