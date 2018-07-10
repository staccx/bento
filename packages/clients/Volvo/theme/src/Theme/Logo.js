import React from "react"
import { registerStyle, VARIANT_DEFAULT } from "@staccx/theme"

const Logo = ({ inverted }) => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6.32c3.03.01 5.94 1.25 8.08 3.45a11.86 11.86 0 0 1 3.33 8.29 11.69 11.69 0 0 1-7.05 10.79c-1.38.59-2.86.89-4.36.89A11.44 11.44 0 0 1 7.4 22.5 11.94 11.94 0 0 1 9.88 9.75 11.44 11.44 0 0 1 18 6.32zm0 .18c-3 .02-5.86 1.24-7.97 3.4a11.75 11.75 0 0 0-3.32 8.16 11.75 11.75 0 0 0 3.34 8.12A11.22 11.22 0 0 0 18 29.56c2.98 0 5.83-1.22 7.94-3.37a11.75 11.75 0 0 0 .02-16.3A11.23 11.23 0 0 0 18 6.5z"
      fill="#BCBCB6"
    />
    <path
      d="M17.47 0c3.85 0 7.59 1.29 10.65 3.67l1.94-1.98 3.41 3.49-1.94 2.04a18.19 18.19 0 0 1-.65 22.2c-2.53 3.07-6 5.2-9.86 6-3.85.82-7.86.28-11.38-1.52a17.72 17.72 0 0 1-8-8.43A18.28 18.28 0 0 1 .47 13.78c.9-3.92 3.07-7.41 6.16-9.91C9.72 1.37 13.53 0 17.47 0zm0 4.21c-2.64 0-5.22.8-7.42 2.3a13.6 13.6 0 0 0-4.92 6.14 13.96 13.96 0 0 0 2.9 14.9 13.07 13.07 0 0 0 14.55 2.96 13.42 13.42 0 0 0 6-5.04A13.9 13.9 0 0 0 26.9 8.22c-2.5-2.56-5.9-4-9.43-4z"
      transform="translate(.53 .12)"
      fill="url(#paint0_radial)"
    />
    <path
      d="M13.47 0A13.19 13.19 0 0 1 23 4.03a13.8 13.8 0 0 1 3.94 9.76c0 2.72-.8 5.39-2.27 7.65a13.55 13.55 0 0 1-6.05 5.08 13.2 13.2 0 0 1-14.68-2.98A14.12 14.12 0 0 1 1.02 8.5 13.76 13.76 0 0 1 8.3 1.03C9.94.33 11.7 0 13.47 0zm0 .18c-2.63 0-5.2.8-7.38 2.3a13.56 13.56 0 0 0-4.9 6.1 13.92 13.92 0 0 0 2.87 14.84 13.2 13.2 0 0 0 9.41 3.97 13.2 13.2 0 0 0 9.41-3.97 13.9 13.9 0 0 0 2.9-14.84c-1.01-2.5-2.72-4.62-4.91-6.11a13.08 13.08 0 0 0-7.4-2.29z"
      transform="translate(4.53 4.27)"
      fill="url(#paint1_linear)"
    />
    <path
      d="M17.6 0c3.87 0 7.63 1.3 10.7 3.73l-.06.06a17.27 17.27 0 0 0-21.8.32A18.01 18.01 0 0 0 .4 14.18c-.84 3.96-.35 8.1 1.4 11.73a17.73 17.73 0 0 0 8.22 8.3 17.17 17.17 0 0 0 11.48 1.26c3.86-.91 7.3-3.14 9.76-6.31A18.2 18.2 0 0 0 35.06 18a18.07 18.07 0 0 0-3.41-10.66l.06-.06a18.3 18.3 0 0 1-2.63 24.34 17.34 17.34 0 0 1-12.11 4.37 17.4 17.4 0 0 1-11.8-5.23 18.31 18.31 0 0 1 0-25.46A17.12 17.12 0 0 1 17.59 0z"
      transform="translate(.4)"
      fill="url(#paint2_radial)"
    />
    <path
      d="M13.35 0c2.64 0 5.23.8 7.42 2.3a13.6 13.6 0 0 1 4.92 6.14 13.96 13.96 0 0 1-2.9 14.89 13.07 13.07 0 0 1-14.55 2.96 13.42 13.42 0 0 1-5.99-5.03A13.9 13.9 0 0 1 3.91 4a13.33 13.33 0 0 1 9.44-4zm0 1.93C11.1 1.92 8.88 2.6 7 3.88a11.65 11.65 0 0 0-4.23 5.25 11.96 11.96 0 0 0 2.45 12.76 11.2 11.2 0 0 0 12.46 2.57 11.5 11.5 0 0 0 5.15-4.3 11.9 11.9 0 0 0-1.38-14.78 11.42 11.42 0 0 0-8.09-3.45z"
      transform="translate(4.65 4.4)"
      fill="url(#paint3_radial)"
    />
    <path
      opacity=".67"
      d="M0 .1l.01.05.02.02h.06A.2.2 0 0 0 .13.12V0a.2.2 0 0 0-.1.04A.09.09 0 0 0 0 .1z"
      transform="translate(2.04 22.23)"
      fill="url(#paint4_linear)"
    />
    <path
      opacity=".67"
      d="M0 0h.08v.07H0V0z"
      transform="translate(4.53 21.96)"
      fill="url(#paint5_linear)"
    />
    <path
      opacity=".67"
      d="M0 0h.08v.07H0V0z"
      transform="translate(4.53 22.04)"
      fill="url(#paint6_linear)"
    />
    <path
      opacity=".67"
      d="M0 .1l.01.05.02.02h.06A.2.2 0 0 0 .13.12V0a.2.2 0 0 0-.1.04A.09.09 0 0 0 0 .1z"
      transform="translate(2.87 22.23)"
      fill="url(#paint7_linear)"
    />
    <path
      opacity=".67"
      d="M0 0h.23v.11H0V0z"
      transform="translate(4.89 22.08)"
      fill="url(#paint8_linear)"
    />
    <path
      opacity=".67"
      d="M6.25 0H0c.16.74.36 1.48.61 2.2h6.61C6.82 1.5 6.5.75 6.25 0zM3.6.14l.05.03-.02.02v.05h.08L3.7.21l.04.04-.02.02v.06L3.77.3l.04.04h-.07v.1L3.7.45V.43h-.08V.5h.06L3.7.47l.03.05h-.11V.6h.1l.02-.04.04.05h-.16v.1L3.6.73V.61H3.5l-.03.01L3.45.6h.14V.52h-.06L3.5.53 3.5.51h.1V.43h-.06a.03.03 0 0 0-.03 0L3.5.41h.1V.34h-.1a.03.03 0 0 0-.02 0L3.46.33h.13V.25h-.06a.03.03 0 0 0-.02.01L3.49.24h.1v-.1zM1 .72H.85V.7H.9A.02.02 0 0 0 .9.7V.28.26a.02.02 0 0 0-.01 0H.85V.23h.02C.9.24.92.23.94.2v.47l.01.01.02.01h.05v.02zM1.32.7a.03.03 0 0 1-.03.02h-.02L1.26.67a.26.26 0 0 1-.04.03.1.1 0 0 1-.05.01.08.08 0 0 1-.06-.02.07.07 0 0 1-.02-.05.12.12 0 0 1 .03-.09.26.26 0 0 1 .14-.04V.48a.1.1 0 0 0-.01-.05L1.2.42a.06.06 0 0 0-.05.01V.5h-.02a.02.02 0 0 1-.01 0H1.1V.47a.07.07 0 0 1 .02-.05A.1.1 0 0 1 1.2.4a.1.1 0 0 1 .06.02.08.08 0 0 1 .03.06V.7h.02l.01-.04h.01a.1.1 0 0 1 0 .05zm.28.02h-.09V.7h.01a.02.02 0 0 0 .02 0V.49a.1.1 0 0 0 0-.05.04.04 0 0 0-.04-.02c-.02 0-.03 0-.04.02a.15.15 0 0 0-.04.05v.2l.02.01h.01v.02h-.09V.7h.01a.02.02 0 0 0 .02 0V.42h-.03V.4h.04L1.42.4v.06a.21.21 0 0 1 .04-.04L1.5.4a.06.06 0 0 1 .05.02c.02.02.02.05.02.08v.18a.02.02 0 0 0 0 .02h.03v.02zM1.83.7a.06.06 0 0 1-.05.02.05.05 0 0 1-.05-.02.15.15 0 0 1-.01-.08v-.2h-.07V.4h.02a.05.05 0 0 0 .04-.02.13.13 0 0 0 .02-.06V.3h.02v.1h.08v.02h-.08v.21l.01.05A.04.04 0 0 0 1.8.7a.04.04 0 0 0 .04-.02l.01-.05h.02c0 .03-.02.05-.03.07zm.32 0a.03.03 0 0 1-.04.02H2.1L2.08.67a.26.26 0 0 1-.04.03.1.1 0 0 1-.04.01.08.08 0 0 1-.06-.02.08.08 0 0 1-.02-.05.12.12 0 0 1 .03-.09.26.26 0 0 1 .13-.04V.48a.1.1 0 0 0 0-.05L2.03.42a.06.06 0 0 0-.05.01.03.03 0 0 0-.01.03V.5h-.02a.02.02 0 0 1-.01 0V.47a.07.07 0 0 1 .02-.05.1.1 0 0 1 .07-.02.1.1 0 0 1 .06.02.08.08 0 0 1 .02.06V.7h.03V.65h.02a.1.1 0 0 1-.01.05zm.27-.24L2.4.48a.02.02 0 0 1-.02 0V.41h-.01c-.02 0-.03 0-.05.03a.26.26 0 0 0-.04.08V.7a.02.02 0 0 0 .02 0h.05v.02h-.16V.7h.04a.02.02 0 0 0 .02 0V.45.43a.02.02 0 0 0-.02 0H2.2V.4h.02L2.27.4h.01v.1a.28.28 0 0 1 .05-.07.07.07 0 0 1 .05-.02.04.04 0 0 1 .03.01.04.04 0 0 1 .01.03v.02zm.6.15v.16l-.04.04c0-.03-.02-.05-.07-.06V.73l.06.01C3 .74 3 .73 3 .71V.6h-.17a.1.1 0 0 0-.04.01L2.76.6h.23V.52l.03.01.06-.06H2.88L2.86.46h.22L3.1.43l.04.05c-.02 0-.06.02-.11.06l.02.02-.02.01V.6h.14L3.2.56l.05.05h-.22zm.23-.17l-.03.01-.02.03a.34.34 0 0 1-.17-.22H3v.16l-.03.01V.28a.48.48 0 0 1-.23.23V.49a.54.54 0 0 0 .2-.23h-.13a.1.1 0 0 0-.05.01L2.76.25h.22v-.1l.05.03-.02.02v.05h.16L3.2.2l.04.05h-.2a.27.27 0 0 0 .2.17v.01zm.55.3c-.03.02-.04.03-.04.05h-.13A.33.33 0 0 1 3.5.76.25.25 0 0 1 3.4.7a.33.33 0 0 1-.1.1.38.38 0 0 0 .1-.13.55.55 0 0 1-.06-.14h.01l.05.11a.93.93 0 0 0 .03-.2h-.06l-.02.04-.03-.04.03-.01.07-.17H3.33L3.3.26h.11L3.44.2l.03.05-.02.02-.08.16h.06L3.45.4l.03.04-.02.02a1 1 0 0 1-.04.2l.08.05a.4.4 0 0 0 .12.02h.18zm.53 0s-.02 0-.03.02L4.3.79a.56.56 0 0 1-.1-.06.33.33 0 0 1-.09-.08.42.42 0 0 1-.06-.15h-.06v.23l.11-.07v.01a.46.46 0 0 0-.13.12L3.94.74V.31.21l.04.03h.1a.22.22 0 0 0-.03-.1c.04.02.06.03.06.05a.05.05 0 0 1-.01.05h.1L4.2.22l.04.04-.02.02v.23L4.2.53V.5h-.14c.01.05.03.09.06.13.05-.03.1-.07.13-.12l.03.06h-.02l-.14.07.1.07.11.02v.01z"
      transform="translate(.9 21.7)"
      fill="url(#paint9_linear)"
    />
    <path
      opacity=".67"
      d="M0 0h.23v.1H0V0z"
      transform="translate(4.89 21.97)"
      fill="url(#paint10_linear)"
    />
    <path
      opacity=".86"
      d="M.97 0h6.25c-.16.74-.36 1.48-.61 2.2H0C.4 1.5.72.75.97 0z"
      transform="translate(27.88 21.7)"
      fill="url(#paint11_linear)"
    />
    <path
      d="M35.41 13.48c.4 1.47.6 3 .59 4.52a20.5 20.5 0 0 1-.59 4.7H.65v-.07h34.7c.4-1.53.6-3.1.59-4.7 0-1.5-.17-2.99-.53-4.45z"
      fill="#000"
    />
    <path
      d="M.59 0H35.4a18.95 18.95 0 0 1-.06 9.21H.65A17.72 17.72 0 0 1 .59 0z"
      transform="translate(0 13.42)"
      fill="url(#paint12_radial)"
    />
    <path
      d="M4.94 0l3.88 3.97-2.88 2.95.18.24-2.06 1.69-.65.24 4.24-4.4L4.24 1.2 0 5.54l.18-.6L4.94 0z"
      transform="translate(26.35 .6)"
      fill="url(#paint13_linear)"
    />
    <path
      d="M0 0a20.5 20.5 0 0 1 8.06 8.19V0H0z"
      transform="translate(27.41 .18)"
      fill="url(#paint14_radial)"
    />
    <path
      d="M27.41.18a20.5 20.5 0 0 1 8.06 8.19"
      stroke="#A7A79C"
      strokeWidth=".34"
      strokeLinecap="round"
    />
    <path
      d="M27.41.18a20.37 20.37 0 0 1 8 8.19"
      stroke="#C2C2B9"
      strokeWidth=".24"
      strokeLinecap="round"
    />
    <path
      d="M27.35.18a20.3 20.3 0 0 1 8.06 8.25"
      stroke="#E0E0D8"
      strokeWidth=".13"
      strokeLinecap="round"
    />
    <path
      d="M27.35.18a20.53 20.53 0 0 1 8 8.25"
      stroke="#fff"
      strokeWidth=".03"
      strokeLinecap="round"
    />
    <path
      d="M8.18 0c.06 0 .12.06.12.18H0C0 .06.06 0 .12 0h8.06z"
      transform="translate(27.3)"
      fill="url(#paint15_linear)"
    />
    <path
      d="M.18 8.37c0 .12-.06.18-.12.18L0 8.43V0h.06c.06 0 .12.06.12.18v8.19z"
      transform="translate(35.41)"
      fill="url(#paint16_linear)"
    />
    <path
      d="M30.59 20.25c-1.57 0-2.85-.98-2.85-2.19 0-1.2 1.28-2.2 2.85-2.2 1.6 0 2.9 1 2.9 2.2 0 1.2-1.3 2.2-2.9 2.2zm0-3.73c-.57 0-.98.65-.98 1.54 0 .84.42 1.48.98 1.48.53 0 .97-.68.97-1.48 0-.85-.43-1.54-.97-1.54zM12.7 20.25c-1.58 0-2.85-.98-2.85-2.19 0-1.16 1.3-2.13 2.85-2.13 1.6 0 2.9.95 2.9 2.13 0 1.2-1.3 2.2-2.9 2.2zm0-3.67c-.56 0-.98.64-.98 1.48s.42 1.48.98 1.48c.52 0 .97-.68.97-1.48 0-.8-.44-1.48-.97-1.48zm10.47 3.55l-1.85-3.5-.92.01-.02-.56 4.02-.03.03.57-1.03.02 1.44 2.43 1.19-2.46-.69.03-.02-.57 2.79-.02.02.57-.96.02-1.81 3.5h-2.2zm-7.36 0l-.02-.69.97-.02-.03-2.8-.92.02-.02-.57 3.73-.02.02.57-.96.02.02 2.8.98-.02c.31 0 .61-.12.84-.34.22-.22.35-.52.37-.84l.61-.02.03 1.91h-5.62zm-10.53 0l-1.84-3.5-.92.01-.02-.56 4.02-.03.02.57-1.02.02 1.43 2.43 1.25-2.46-.74.03-.02-.56 2.79-.03.02.57-.97.02-1.8 3.5h-2.2z"
      fill="#fff"
    />
    <path
      d="M30.59 15.9c1.59 0 2.88.96 2.88 2.16 0 1.2-1.3 2.17-2.88 2.17-1.53 0-2.83-.97-2.83-2.17s1.3-2.17 2.83-2.17zm0 3.66c.53 0 1-.66 1-1.5 0-.9-.47-1.57-1-1.57-.6 0-1 .67-1 1.57 0 .84.4 1.5 1 1.5zm-17.88-3.6c1.58 0 2.88.96 2.88 2.1 0 1.2-1.3 2.17-2.88 2.17-1.53 0-2.83-.97-2.83-2.17 0-1.14 1.3-2.1 2.83-2.1zm0 3.6c.52 0 1-.66 1-1.5s-.48-1.5-1-1.5c-.6 0-1 .66-1 1.5s.4 1.5 1 1.5zm15.4-3.49v.54h-.93l-1.83 3.5h-2.17l-1.83-3.5h-.94v-.54h4v.54h-1l1.42 2.47 1.23-2.47h-.7v-.54h2.76zm-8.58 0v.54h-.94v2.83h1c.32 0 .62-.12.85-.34.23-.23.37-.53.38-.86h.6v1.87h-5.6v-.67h.94v-2.83h-.94v-.54h3.7zm-9.3 0v.54H9.3l-1.82 3.5H5.3l-1.82-3.5h-.94v-.54h4v.54h-1l1.41 2.47 1.3-2.47h-.77v-.54h2.77zm20.36-.23c-1.59 0-2.88 1-2.88 2.22 0 1.22 1.3 2.22 2.88 2.22 1.61 0 2.93-1 2.93-2.22 0-1.22-1.32-2.22-2.93-2.22zm0 3.67c-.54 0-.95-.62-.95-1.45 0-.88.4-1.51.95-1.51.52 0 .95.68.95 1.51 0 .79-.44 1.45-.95 1.45zm-17.88-3.6c-1.56 0-2.88.98-2.88 2.15 0 1.22 1.3 2.22 2.88 2.22 1.61 0 2.93-1 2.93-2.22 0-1.19-1.32-2.16-2.93-2.16zm0 3.6c-.55 0-.96-.62-.96-1.45s.41-1.45.96-1.45c.51 0 .95.66.95 1.45 0 .79-.44 1.45-.95 1.45zm15.46-3.49H25.3v.65h.68l-1.16 2.3-1.32-2.3h.96v-.65h-4.1v.65h.96l1.81 3.46.02.03h2.23l.02-.03 1.8-3.46h.97v-.65zm-8.6 0h-3.8v.65h.95v2.72h-.95v.77h5.7v-1.97h-.7v.05c-.01.31-.14.6-.36.82-.22.22-.52.34-.82.34h-.95v-2.73h.94v-.65zm-9.29 0H7.42v.65h.73l-1.21 2.31-1.33-2.31h.97v-.65h-4.1v.65h.96l1.81 3.46.02.03H7.5l.01-.03 1.81-3.46h.96v-.65z"
      fill="#39393C"
    />
    <path
      d="M.59 0A18.96 18.96 0 0 0 0 4.51l.05 1.03.1 1.16L.1 4.62c.02-1.5.23-3 .61-4.46L13.03.1l5.32-.1L.6 0z"
      transform="translate(.06 13.5)"
      fill="url(#paint17_linear)"
    />
    <defs>
      <radialGradient
        id="paint0_radial"
        cx=".5"
        cy=".5"
        r=".5"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(72.9799 0 0 74.6883 -31.52 -23)"
      >
        <stop stopColor="#fff" />
        <stop offset=".04" stopColor="#FAFAF8" />
        <stop offset=".23" stopColor="#F8F8F5" />
        <stop offset=".29" stopColor="#DADAD7" />
        <stop offset=".41" stopColor="#A3A4A1" />
        <stop offset=".52" stopColor="#7E7F7D" />
        <stop offset=".6" stopColor="#686866" />
        <stop offset=".65" stopColor="#5F5F5D" />
        <stop offset=".74" stopColor="#565754" />
        <stop offset=".9" stopColor="#3B3A37" />
        <stop offset="1" />
      </radialGradient>
      <linearGradient
        id="paint1_linear"
        x2="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="scale(13.8371 14.161) rotate(19 -.66 2.07)"
      >
        <stop stopColor="#DCDBD3" />
        <stop offset="1" stopColor="#fff" />
      </linearGradient>
      <radialGradient
        id="paint2_radial"
        cx=".5"
        cy=".5"
        r=".5"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(80.0939 0 0 81.9688 -12.08 -11.46)"
      >
        <stop stopColor="#BBBCB7" />
        <stop offset="1" stopColor="#808079" />
      </radialGradient>
      <radialGradient
        id="paint3_radial"
        cx=".5"
        cy=".5"
        r=".5"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(56.2437 0 0 57.5603 -8.47 -8.67)"
      >
        <stop stopColor="#fff" />
        <stop offset=".16" stopColor="#F1F1F2" />
        <stop offset=".3" stopColor="#E4E4E5" />
        <stop offset=".34" stopColor="#CECFCE" />
        <stop offset=".4" stopColor="#AEAFAC" />
        <stop offset=".46" stopColor="#969694" />
        <stop offset=".53" stopColor="#858683" />
        <stop offset=".59" stopColor="#7C7C79" />
        <stop offset=".64" stopColor="#787976" />
        <stop offset=".74" stopColor="#5E5E5B" />
        <stop offset=".85" stopColor="#43423F" />
        <stop offset=".94" stopColor="#1F1F1E" />
        <stop offset="1" />
      </radialGradient>
      <linearGradient
        id="paint4_linear"
        x2="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0 -.1011 .09879 0 .01 .18)"
      >
        <stop stopColor="#fff" />
        <stop offset=".17" stopColor="#F8F8F5" />
        <stop offset=".43" stopColor="#B1B1AC" />
        <stop offset=".43" stopColor="#ADAEA8" />
        <stop offset=".53" stopColor="#898984" />
        <stop offset=".63" stopColor="#6C6C67" />
        <stop offset=".73" stopColor="#53534E" />
        <stop offset=".82" stopColor="#3E3E3A" />
        <stop offset=".92" stopColor="#252523" />
        <stop offset="1" stopColor="#1B1A19" />
      </linearGradient>
      <linearGradient
        id="paint5_linear"
        x2="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0 -.00005 .00005 0 -108.41 -50.52)"
      >
        <stop stopColor="#fff" />
        <stop offset=".17" stopColor="#F8F8F5" />
        <stop offset=".43" stopColor="#B1B1AC" />
        <stop offset=".43" stopColor="#ADAEA8" />
        <stop offset=".53" stopColor="#898984" />
        <stop offset=".63" stopColor="#6C6C67" />
        <stop offset=".73" stopColor="#53534E" />
        <stop offset=".82" stopColor="#3E3E3A" />
        <stop offset=".92" stopColor="#252523" />
        <stop offset="1" stopColor="#1B1A19" />
      </linearGradient>
      <linearGradient
        id="paint6_linear"
        x2="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(-90 -81.5 27.65) scale(.00005)"
      >
        <stop stopColor="#fff" />
        <stop offset=".17" stopColor="#F8F8F5" />
        <stop offset=".43" stopColor="#B1B1AC" />
        <stop offset=".43" stopColor="#ADAEA8" />
        <stop offset=".53" stopColor="#898984" />
        <stop offset=".63" stopColor="#6C6C67" />
        <stop offset=".73" stopColor="#53534E" />
        <stop offset=".82" stopColor="#3E3E3A" />
        <stop offset=".92" stopColor="#252523" />
        <stop offset="1" stopColor="#1B1A19" />
      </linearGradient>
      <linearGradient
        id="paint7_linear"
        x2="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0 -.00018 .00018 0 -170.69 -123.2)"
      >
        <stop stopColor="#fff" />
        <stop offset=".17" stopColor="#F8F8F5" />
        <stop offset=".43" stopColor="#B1B1AC" />
        <stop offset=".43" stopColor="#ADAEA8" />
        <stop offset=".53" stopColor="#898984" />
        <stop offset=".63" stopColor="#6C6C67" />
        <stop offset=".73" stopColor="#53534E" />
        <stop offset=".82" stopColor="#3E3E3A" />
        <stop offset=".92" stopColor="#252523" />
        <stop offset="1" stopColor="#1B1A19" />
      </linearGradient>
      <linearGradient
        id="paint8_linear"
        x2="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0 -.0001 .0002 0 -296.26 -77.86)"
      >
        <stop stopColor="#fff" />
        <stop offset=".17" stopColor="#F8F8F5" />
        <stop offset=".43" stopColor="#B1B1AC" />
        <stop offset=".43" stopColor="#ADAEA8" />
        <stop offset=".53" stopColor="#898984" />
        <stop offset=".63" stopColor="#6C6C67" />
        <stop offset=".73" stopColor="#53534E" />
        <stop offset=".82" stopColor="#3E3E3A" />
        <stop offset=".92" stopColor="#252523" />
        <stop offset="1" stopColor="#1B1A19" />
      </linearGradient>
      <linearGradient
        id="paint9_linear"
        x2="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0 -.03946 .12984 0 -9487.94 -1560.12)"
      >
        <stop stopColor="#fff" />
        <stop offset=".17" stopColor="#F8F8F5" />
        <stop offset=".43" stopColor="#B1B1AC" />
        <stop offset=".43" stopColor="#ADAEA8" />
        <stop offset=".53" stopColor="#898984" />
        <stop offset=".63" stopColor="#6C6C67" />
        <stop offset=".73" stopColor="#53534E" />
        <stop offset=".82" stopColor="#3E3E3A" />
        <stop offset=".92" stopColor="#252523" />
        <stop offset="1" stopColor="#1B1A19" />
      </linearGradient>
      <linearGradient
        id="paint10_linear"
        x2="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0 -.00008 .00018 0 -296.26 -70.14)"
      >
        <stop stopColor="#fff" />
        <stop offset=".17" stopColor="#F8F8F5" />
        <stop offset=".43" stopColor="#B1B1AC" />
        <stop offset=".43" stopColor="#ADAEA8" />
        <stop offset=".53" stopColor="#898984" />
        <stop offset=".63" stopColor="#6C6C67" />
        <stop offset=".73" stopColor="#53534E" />
        <stop offset=".82" stopColor="#3E3E3A" />
        <stop offset=".92" stopColor="#252523" />
        <stop offset="1" stopColor="#1B1A19" />
      </linearGradient>
      <linearGradient
        id="paint11_linear"
        x2="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0 -2.23889 -7.36645 0 698570 -35602.7)"
      >
        <stop stopColor="#fff" />
        <stop offset=".17" stopColor="#F8F8F5" />
        <stop offset=".43" stopColor="#B1B1AC" />
        <stop offset=".43" stopColor="#ADAEA8" />
        <stop offset=".53" stopColor="#898984" />
        <stop offset=".63" stopColor="#6C6C67" />
        <stop offset=".73" stopColor="#53534E" />
        <stop offset=".82" stopColor="#3E3E3A" />
        <stop offset=".92" stopColor="#252523" />
        <stop offset="1" stopColor="#1B1A19" />
      </linearGradient>
      <radialGradient
        id="paint12_radial"
        cx=".5"
        cy=".5"
        r=".5"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(45.4052 0 0 46.4681 -21.08 -22.19)"
      >
        <stop stopColor="#1E71B8" />
        <stop offset=".08" stopColor="#1C69AB" />
        <stop offset=".17" stopColor="#1B64A4" />
        <stop offset=".24" stopColor="#1A63A1" />
        <stop offset=".39" stopColor="#185D98" />
        <stop offset=".69" stopColor="#0F4D80" />
        <stop offset=".84" stopColor="#004472" />
        <stop offset=".93" stopColor="#014472" />
        <stop offset=".97" stopColor="#064271" />
        <stop offset=".99" stopColor="#0D3F6F" />
        <stop offset="1" stopColor="#0F3D6E" />
      </radialGradient>
      <linearGradient
        id="paint13_linear"
        x2="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="scale(-12.51 -12.8029) rotate(45.01 1.1 -.92)"
      >
        <stop offset=".01" stopColor="#121209" />
        <stop offset=".65" stopColor="#454441" />
        <stop offset=".65" stopColor="#484845" />
        <stop offset=".66" stopColor="#535350" />
        <stop offset=".66" stopColor="#646561" />
        <stop offset=".66" stopColor="#7B7B77" />
        <stop offset=".67" stopColor="#969792" />
        <stop offset=".67" stopColor="#BBBBB7" />
        <stop offset=".68" stopColor="#E8E7E2" />
        <stop offset=".68" stopColor="#FBFAF5" />
        <stop offset=".68" stopColor="#F8F7F2" />
        <stop offset=".68" stopColor="#F0F0EA" />
        <stop offset=".69" stopColor="#E4E3DD" />
        <stop offset=".69" stopColor="#D2D2CC" />
        <stop offset=".69" stopColor="#BBBCB5" />
        <stop offset=".69" stopColor="#83847D" />
        <stop offset=".69" stopColor="#A0A19A" />
        <stop offset=".69" stopColor="#6D6D67" />
        <stop offset=".71" stopColor="#5F5F5B" />
        <stop offset=".73" stopColor="#4D4D4B" />
        <stop offset=".76" stopColor="#3B3A3A" />
        <stop offset=".8" stopColor="#242324" />
        <stop offset=".85" stopColor="#101010" />
        <stop offset="1" />
      </linearGradient>
      <radialGradient
        id="paint14_radial"
        cx=".5"
        cy=".5"
        r=".5"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(18.9754 0 0 19.4196 -2.8 -8.8)"
      >
        <stop stopColor="#575652" />
        <stop offset="1" stopColor="#52524E" />
      </radialGradient>
      <linearGradient
        id="paint15_linear"
        x2="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(8.29594 0 0 8.49014 0 -4.16)"
      >
        <stop stopColor="#5D5E60" />
        <stop offset=".02" stopColor="#5B5B5D" />
        <stop offset=".2" stopColor="#484846" />
        <stop offset=".41" stopColor="#343431" />
        <stop offset=".65" stopColor="#222120" />
        <stop offset="1" stopColor="#1B1A19" />
      </linearGradient>
      <linearGradient
        id="paint16_linear"
        x2="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0 -8.54893 8.35339 0 -4.1 8.55)"
      >
        <stop stopColor="#5D5E60" />
        <stop offset=".39" stopColor="#464543" />
        <stop offset=".74" stopColor="#2A2927" />
        <stop offset="1" stopColor="#1B1A19" />
      </linearGradient>
      <linearGradient
        id="paint17_linear"
        x2="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(5.31134 7.35224 -7.18407 5.43567 8.33 -5.6)"
      >
        <stop stopColor="#fff" />
        <stop offset=".11" stopColor="#D5DDF0" />
        <stop offset=".34" stopColor="#94ADD9" />
        <stop offset=".54" stopColor="#668FC9" />
        <stop offset=".71" stopColor="#447DBF" />
        <stop offset=".85" stopColor="#2A74BA" />
        <stop offset=".93" stopColor="#1E71B8" />
        <stop offset=".95" stopColor="#4079BC" />
        <stop offset=".97" stopColor="#5580C0" />
        <stop offset=".98" stopColor="#6085C2" />
        <stop offset="1" stopColor="#6486C3" />
      </linearGradient>
    </defs>
  </svg>
)

export const LogoStyle = registerStyle({ [VARIANT_DEFAULT]: Logo }, "logo")

export default Logo
