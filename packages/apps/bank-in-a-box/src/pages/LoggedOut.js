import React from "react"
import styled from "styled-components"
import { Layout, Wrapper, LayoutItem } from "@staccx/base"
import Back from "../components/Back"

const LoggedOut = ({ history }) => (
  <Wrapper variant="bib">
    <Layout>
      <LayoutItem variant="fadeIn" delay="200">
        <Center>
          <svg
            width="154"
            height="178"
            viewBox="0 0 154 178"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_dddddd)">
              <circle cx="74.5" cy="75.5" r="60.5" fill="white" />
            </g>
            <path
              d="M105.349 51.0024C103.923 51.0454 102.569 51.6479 101.575 52.6824L67.0346 87.6045L54.4491 74.8799C53.9433 74.3473 53.3375 73.9221 52.6672 73.6292C51.9968 73.3363 51.2754 73.1815 50.5452 73.174C49.815 73.1665 49.0906 73.3064 48.4145 73.5854C47.7384 73.8645 47.1242 74.2772 46.6078 74.7993C46.0914 75.3213 45.6833 75.9423 45.4072 76.6259C45.1312 77.3095 44.9929 78.0418 45.0003 78.7801C45.0077 79.5184 45.1608 80.2478 45.4505 80.9256C45.7402 81.6033 46.1608 82.2158 46.6876 82.7271L63.1539 99.3753C64.1833 100.416 65.5792 101 67.0346 101C68.4901 101 69.886 100.416 70.9154 99.3753L109.337 60.5296C110.13 59.7501 110.672 58.7465 110.891 57.6504C111.11 56.5543 110.997 55.4168 110.566 54.3869C110.135 53.357 109.406 52.4828 108.475 51.8789C107.544 51.2749 106.454 50.9694 105.349 51.0024Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <filter
                id="filter0_dddddd"
                x="-50"
                y="-5"
                width="249"
                height="249"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="16" />
                <feGaussianBlur stdDeviation="8" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.294118 0 0 0 0.01 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="8" />
                <feGaussianBlur stdDeviation="4" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.294118 0 0 0 0.01 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow"
                  result="effect2_dropShadow"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="3.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.294118 0 0 0 0.021 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect2_dropShadow"
                  result="effect3_dropShadow"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.294118 0 0 0 0.021 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect3_dropShadow"
                  result="effect4_dropShadow"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="32" />
                <feGaussianBlur stdDeviation="11" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.294118 0 0 0 0.021 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect4_dropShadow"
                  result="effect5_dropShadow"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="44" />
                <feGaussianBlur stdDeviation="32" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.294118 0 0 0 0.0101 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect5_dropShadow"
                  result="effect6_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect6_dropShadow"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear"
                x1="86"
                y1="45.5"
                x2="86.0124"
                y2="105.997"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#55C4B4" />
                <stop offset="0.254044" stopColor="#55C4B4" />
                <stop offset="0.254144" stopColor="#2EB6BE" />
                <stop offset="0.486088" stopColor="#2EB6BE" />
                <stop offset="0.486188" stopColor="#3297BF" />
                <stop offset="0.745756" stopColor="#3297BF" />
                <stop offset="0.745856" stopColor="#2A77BE" />
                <stop offset="1" stopColor="#2A77BE" />
              </linearGradient>
            </defs>
          </svg>
        </Center>
      </LayoutItem>
      <LayoutItem variant="fadeIn" delay="400">
        <Center>Du er nå logget ut</Center>
      </LayoutItem>
    </Layout>
  </Wrapper>
)

const Center = styled.div`
  text-align: center;
`

export default LoggedOut
