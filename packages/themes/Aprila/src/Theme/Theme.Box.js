import { css } from "styled-components"
import { Box, fontSmoothing, theming } from "@staccx/base"
import { FadeIn } from "@staccx/animations"

const defaultBox = css`
  background: ${theming.color.white};
  box-shadow: 0px 16px 16px rgba(0, 0, 75, 0.002),
    0px 8px 8px rgba(0, 0, 75, 0.001), 0px 4px 7px rgba(0, 0, 75, 0.021),
    0px 2px 2px rgba(0, 0, 75, 0.021), 0px 32px 22px rgba(0, 0, 75, 0.021),
    0px 44px 64px rgba(0, 0, 75, 0.0101);
  border-radius: ${theming.borderRadius};
`

export default theming.createVariants(
  {
    dashboardBox: css`
      background-color: ${theming.color("bgGray")};
      border-radius: ${theming.borderRadius};
    `,
    menuBox: css``,
    accountBox: css`
      position: relative;
      max-width: 840px;
      margin: auto;
    `,
    loanBox: defaultBox,
    adBox: css`
      padding: ${theming.spacing.medium};
      background-color: ${theming.color.primary};
      color: ${theming.color.white};
      border-radius: ${theming.borderRadius};
    `,
    contractBox: css``,
    headerContainer: css`
      padding: ${theming.spacing.large} 0 0;
    `,
    modalLeft: css`
      background-color: ${theming.color.primary};
      color: ${theming.color.white};
      text-align: center;
    `,
    modalRight: css`
      background-color: ${theming.color.white};
      text-align: center;
    `,
    accountInfo: css`
      ${defaultBox};
      padding: ${theming.spacing.medium};
      ${fontSmoothing};
      position: relative;
      color: ${theming.color.white};
      background-color: ${theming.color.primary};
    `,
    accountFilter: css`
      ${defaultBox};
      padding: 0;
      ${fontSmoothing};
      position: relative;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      overflow: hidden;
    `,
    transactionHeader: css`
      display: flex;
      width: 100%;
      margin-left: 0;
      background-color: ${theming.color("transactionHeader")};
      justify-content: space-between;
      color: ${theming.color.white};
      padding: ${theming.spacing.small};
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
      font-weight: ${theming.fontWeight.bold};
    `,
    profileAdress: css`
      background-color: #f0f0f0;
      padding: ${theming.spacing.small};
    `,
    prices: css`
      ${defaultBox};
      padding-left: 0;
      padding-right: 0;
      color: ${theming.color.wcag};
    `,
    relative: css`
      padding: 0;
      position: relative;
    `,
    withdrawInputs: css`
      padding: 0;
      display: grid;
      grid-column-gap: ${theming.spacing.small};
      grid-row-gap: ${theming.spacing.small};
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    `,
    center: css`
      text-align: center;
    `,
    expandedItem: css`
      background-color: ${theming.color("expandedItem")};
    `,
    accountHeading: css`
      text-align: left;
      background-color: ${theming.color.primary};
      max-width: 400px;
      margin-left: auto;
      margin-right: auto;
      color: ${theming.color.white};
      padding: ${theming.spacing.medium} ${theming.spacing.large};
      background-position: bottom right;
      background-repeat: no-repeat;
      border-radius: 8px;
      box-shadow: 0px 11px 4px -10px rgba(0, 0, 0, 0.5),
        0px 18px 16px -10px rgba(59, 44, 123, 0.5);
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='293' height='78' viewBox='0 0 293 78' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0)'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M27.1387 30.1378C22.7204 23.8583 24.2055 15.2379 30.4803 10.8162C36.7179 6.39447 45.3689 7.91792 49.7872 14.1603L79.3788 56.2593C83.7971 62.5388 82.312 71.1593 76.0372 75.581C69.7625 80.0027 61.1486 78.5164 56.7303 72.2368L30.963 35.5999L27.1387 30.1378ZM129.986 77.1045H136.038C136.669 77.1045 137.152 76.6215 137.152 76.027V40.2819C137.152 39.6502 136.669 39.1671 136.038 39.1671H129.986C129.354 39.1671 128.872 39.6502 128.872 40.2819V43.6631C126.273 40.319 122.337 38.0896 116.953 38.0896C106.335 38.0896 97.9807 46.4499 97.9807 58.0801C97.9807 69.7103 106.335 78.0706 116.953 78.0706C122.337 78.0706 126.273 75.9155 128.872 72.5342V75.9898C128.872 76.6215 129.354 77.1045 129.986 77.1045ZM117.919 70.3048C110.79 70.3048 106.483 64.8055 106.483 58.1544C106.483 51.4661 110.827 45.9669 117.919 46.004C124.751 46.004 129.354 51.206 129.354 58.1544C129.354 65.0656 124.788 70.3048 117.919 70.3048ZM165.555 78.1449C176.174 78.1449 184.528 69.7846 184.528 58.1544C184.528 46.5242 176.174 38.1639 165.555 38.2011C160.171 38.2011 156.273 40.3562 153.674 43.7003V40.2819C153.674 39.6502 153.191 39.1671 152.56 39.1671H146.508C145.877 39.1671 145.394 39.6502 145.394 40.2819V91.8931C145.394 92.5247 145.877 93.0078 146.508 93.0078H152.56C153.191 93.0078 153.674 92.5247 153.674 91.8931V72.6457C156.273 75.9527 160.171 78.1449 165.555 78.1449ZM164.552 70.3048C157.721 70.3048 153.117 65.1028 153.117 58.1544C153.117 51.206 157.721 45.9669 164.552 46.004C171.681 46.004 175.988 51.5033 175.988 58.1544C175.988 64.8055 171.681 70.3048 164.552 70.3048ZM213.934 46.1527L215.382 40.2075C215.493 39.6502 215.159 39.0557 214.639 38.8699C213.043 38.3868 211.335 38.1639 209.255 38.1639C204.614 38.1639 200.716 39.836 198.228 43.4402V40.2819C198.228 39.6502 197.746 39.1671 197.114 39.1671H191.137C190.505 39.1671 190.023 39.6502 190.023 40.2819V75.9898C190.023 76.6215 190.505 77.1045 191.137 77.1045H197.189C197.82 77.1045 198.302 76.6215 198.302 75.9898V56.2222C198.302 49.7569 202.052 46.0412 207.325 46.0412C208.921 46.0412 210.852 46.3385 212.449 46.933C213.08 47.1559 213.785 46.8215 213.934 46.1527ZM223.401 31.8472C226.706 31.8472 229.268 29.3577 229.268 26.0507C229.268 22.7437 226.706 20.1799 223.401 20.1799C220.097 20.1799 217.609 22.7437 217.609 26.0507C217.609 29.3577 220.097 31.8472 223.401 31.8472ZM220.394 77.1045H226.483C227.114 77.1045 227.597 76.6215 227.597 76.027V40.2819C227.597 39.6502 227.114 39.1671 226.483 39.1671H220.394C219.763 39.1671 219.28 39.6502 219.28 40.2819V75.9898C219.28 76.6215 219.763 77.1045 220.394 77.1045ZM236.953 77.1045H243.043C243.674 77.1045 244.156 76.6215 244.156 76.027V21.1831C244.156 20.5514 243.674 20.0684 243.043 20.0684H236.953C236.322 20.0684 235.84 20.5514 235.84 21.1831V75.9898C235.84 76.6215 236.322 77.1045 236.953 77.1045ZM281.656 77.1045H287.708C288.34 77.1045 288.822 76.6215 288.822 76.027V40.2819C288.822 39.6502 288.34 39.1671 287.708 39.1671H281.656C281.025 39.1671 280.543 39.6502 280.543 40.2819V43.6631C277.944 40.319 274.008 38.0896 268.624 38.0896C258.005 38.0896 249.651 46.4499 249.651 58.0801C249.651 69.7103 258.005 78.0706 268.624 78.0706C274.008 78.0706 277.944 75.9155 280.543 72.5342V75.9898C280.543 76.6215 281.025 77.1045 281.656 77.1045ZM269.627 70.3048C262.498 70.3048 258.191 64.8055 258.191 58.1544C258.191 51.4661 262.498 45.9669 269.627 46.004C276.458 46.004 281.062 51.206 281.062 58.1544C281.062 65.0656 276.496 70.3048 269.627 70.3048ZM317.225 78.1449C327.843 78.1449 336.197 69.7846 336.197 58.1544C336.197 46.5242 327.843 38.1639 317.225 38.201C311.841 38.201 307.942 40.3562 305.343 43.7003V21.1831C305.343 20.5514 304.861 20.0684 304.23 20.0684H298.178C297.546 20.0684 297.064 20.5514 297.064 21.1831V76.0641C297.064 76.6958 297.546 77.1788 298.178 77.1788H304.23C304.861 77.1788 305.343 76.6958 305.343 76.0641V72.6457C307.942 75.9527 311.841 78.1449 317.225 78.1449ZM316.222 70.3048C309.39 70.3048 304.786 65.1028 304.786 58.1544C304.786 51.206 309.39 45.9669 316.222 46.004C323.351 46.004 327.658 51.5033 327.658 58.1544C327.658 64.8055 323.351 70.3048 316.222 70.3048ZM371.841 77.1045H377.893C378.524 77.1045 379.007 76.6215 379.007 76.027V40.2818C379.007 39.6502 378.524 39.1671 377.893 39.1671H371.841C371.21 39.1671 370.727 39.6502 370.727 40.2818V43.6631C368.128 40.319 364.193 38.0896 358.809 38.0896C348.19 38.0896 339.836 46.4499 339.836 58.0801C339.836 69.7103 348.19 78.0706 358.809 78.0706C364.193 78.0706 368.128 75.9155 370.727 72.5342V75.9898C370.727 76.6215 371.21 77.1045 371.841 77.1045ZM359.811 70.3048C352.683 70.3048 348.376 64.8055 348.376 58.1544C348.376 51.4661 352.683 45.9669 359.811 46.004C366.643 46.004 371.247 51.206 371.247 58.1544C371.247 65.0656 366.68 70.3048 359.811 70.3048ZM422.522 75.9898V53.2497C422.522 44.3691 416.173 38.1639 407.113 38.201C403.215 38.201 398.5 39.3158 395.455 43.8118V40.2818C395.455 39.6502 394.972 39.1671 394.341 39.1671H388.326C387.695 39.1671 387.212 39.6502 387.212 40.2818V75.9898C387.212 76.6215 387.695 77.1045 388.326 77.1045H394.415C395.047 77.1045 395.529 76.6215 395.529 75.9898V56.0736C395.529 49.5711 400.022 46.0412 405.368 46.0412C410.901 46.0412 414.205 49.6083 414.205 55.9993V75.9898C414.205 76.6215 414.688 77.1045 415.319 77.1045H421.408C422.039 77.1045 422.522 76.6215 422.522 75.9898ZM442.126 53.5841H437.967V21.1831C437.967 20.5514 437.485 20.0684 436.854 20.0684H430.764C430.133 20.0684 429.651 20.5514 429.651 21.1831V76.0641C429.651 76.6958 430.133 77.1788 430.764 77.1788H436.854C437.485 77.1788 437.967 76.6958 437.967 76.0641V61.1641H442.089L454.378 76.7329C454.601 76.993 454.935 77.1417 455.269 77.1417H462.918C463.846 77.1417 464.366 76.0641 463.772 75.321L449.18 57.0397L463.401 41.025C464.069 40.319 463.549 39.1671 462.584 39.1671H455.158C454.824 39.1671 454.527 39.2786 454.304 39.5387L442.126 53.5841ZM19.3788 78.1077C28.2782 78.1077 35.4926 70.8877 35.4926 61.9815C35.4926 53.0753 28.2782 45.8553 19.3788 45.8553C10.4793 45.8553 3.26489 53.0753 3.26489 61.9815C3.26489 70.8877 10.4793 78.1077 19.3788 78.1077Z' fill='white' fill-opacity='0.1'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0'%3e%3crect width='293' height='78' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e ");
      min-height: 160px;
      display: flex;
      justify-content: center;
      align-items: start;
      flex-direction: column;
      @media (max-width: 380px) {
        padding: ${theming.spacing.medium};
      }
    `,
    highlightBox: css`
      border: none;
      border-radius: ${theming.borderRadius};
      padding: ${theming.spacing("mediumPlus")} ${theming.spacing.large};
      margin-left: -${theming.spacing.large};
      margin-right: -${theming.spacing.large};
      background: ${theming.color("purpleBg")};
    `,
    schemaContainer: css`
      margin-bottom: ${p => {
        switch (p.level) {
          case 1:
            return theming.spacing.medium
          case 2:
            return theming.spacing.large
          case 3:
            return theming.spacing.tiny
          default:
            return 0
        }
      }};
      flex-grow: 1;
    }
    `,
    inlineBox: css`
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      > *:not(:last-child) {
        margin-right: ${theming.spacing.small};
      }
    `,
    personalInfo: css`
      border-top: 1px solid ${theming.color.line};
      padding-top: ${theming.spacing.medium};
    `,
    login: css`
      padding: ${theming.spacing.tiny};
      border-radius: 0 0 5px 5px;
      border: 1px solid ${theming.color.primary};
      min-height: 306px;
      position: relative;
    `,
    top: css`
      z-index: 999;
    `,
    tooltip: css`
      display: ${({ isVisible }) => (isVisible ? "block" : "none")};
      background-color: #f9f9f9;
      border-radius: ${theming.borderRadius};
      min-width: ${theming.wrapper.small};
      max-width: ${theming.wrapper.small};
      min-height: ${theming.spacing.small};
      margin-bottom: ${theming.spacing.small};
      padding: ${theming.spacing.small};
      opacity: 0;
      animation: ${FadeIn} 0.4s ease-out 1 forwards;
      box-shadow: 0px ${theming.spacing.small} ${theming.spacing.medium}
        rgba(0, 0, 0, 0.06);
      border: 1px solid ${theming.color.line};

      > ul {
        list-style-type: disc;
        li {
          list-style-type: disc;
        }
      }
    `,
    increaseMargin: css`
      margin-bottom: ${theming.spacing.medium};
    `,
    frame: css`
      border: 1px solid ${theming.color.line};
      padding: ${theming.spacing.small};
      border-radius: ${theming.borderRadius};
    `
  },
  Box.themeProps.box
)
