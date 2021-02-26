import React from "react"
import Breadcrumb from "./Breadcrumb"

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb
}
export const BreadcrumbStandard = args => (
  <Breadcrumb
    path={[
      {
        name: "First page",
        to: "/"
      },
      {
        name: "Second page",
        to: "/level-2"
      },
      {
        name: "Third page",
        to: "/level-3"
      },
      {
        name: "Fourth page"
      }
    ]}
  />
)

export const BreadcrumbMultiple = args => {
  return (
    <>
      <Breadcrumb
        path={[
          {
            name: "First page"
          }
        ]}
      />
      <Breadcrumb
        path={[
          {
            name: "First page",
            to: "/"
          },
          {
            name: "Second page"
          }
        ]}
      />
      <Breadcrumb
        path={[
          {
            name: "First page",
            to: "/"
          },
          {
            name: "Second page",
            to: "/level-2"
          },
          {
            name: "Third page"
          }
        ]}
      />
      <Breadcrumb
        path={[
          {
            name: "First page",
            to: "/"
          },
          {
            name: "Second page",
            to: "/level-2"
          },
          {
            name: "Third page",
            to: "/level-3"
          },
          {
            name: "Fourth page"
          }
        ]}
      />
    </>
  )
}
