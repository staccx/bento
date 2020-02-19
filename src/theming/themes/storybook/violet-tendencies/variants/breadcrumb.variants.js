import { css } from "styled-components"
import BreadCrumb from "../../../../../components/Breadcrumb/Breadcrumb"
import createVariants from "../../../../utils/createVariants"
import { color, VARIANT_DEFAULT } from "../../../../index"

export const breadCrumbWrapperVariants = createVariants(
  {
    [VARIANT_DEFAULT]: css`
      --col-bg: transparent;
      --col-hover-bg: transparent;
      --col-hover-txt: ${color.primary};
    `
  },
  BreadCrumb.themeProps.main
)

export const breadCrumbItemVariants = createVariants(
  {
    [VARIANT_DEFAULT]: css`
      a::after {
        content: "//";
        height: auto;
        border-color: transparent;
        border-width: 0;
        top: 50%;
        transform: translateY(-50%);
        color: ${color("primaryLight")};
      }
    `
  },
  BreadCrumb.themeProps.listItem
)

export const breadCrumbLastItemVariants = createVariants(
  {
    [VARIANT_DEFAULT]: css`
      background-color: transparent;
      color: ${color("primary")};
      div::before {
        border-width: 0 !important;
        border-color: transparent !important;
      }
    `
  },
  BreadCrumb.themeProps.listItemLast
)
