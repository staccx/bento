import React from "react"
import styled from "styled-components"
import { Flag, Heading } from "@staccx/base"
import { formatPhone, dashIt } from "@staccx/formatting"
import { spacing, color, font } from "@staccx/theme"
import { SanityImage } from "@staccx/sanity"
import VCard from "../Icons/vCard"
import Phone from "../Icons/Phone"
import Send from "../Icons/Send"

const Person = ({
  name,
  image,
  title,
  company,
  phone,
  email,
  linkedin,
  twitter,
  link
}) => (
  <PersonItem key={name}>
    <SanityImage image={image}>
      {({ image }) => {
        return (
          <Flag top>
            <Heading level={3}>{name}</Heading>
            <Title>
              {title}, {company.name}
            </Title>
            <SubtleLink href={`mailto:${email}`}><Send />{email}</SubtleLink> <br />
            <SubtleLink href={`tel:${phone}`}>
              <Phone />{formatPhone(phone)}
            </SubtleLink>{" "}
            <br />
            <SubtleLink
              href={`/vCards/${dashIt(
                name
              )}.vcf`}
            >
              <VCard/> Save contact details
            </SubtleLink>
            <br />
            {linkedin && (
              <SubtleLink href={linkedin}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    fill="currentColor"
                    d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5zm0 2h14v14H5V5zm2.78 1.316c-.858 0-1.372.516-1.372 1.202 0 .686.514 1.199 1.285 1.199.857 0 1.371-.513 1.371-1.2 0-.685-.514-1.2-1.285-1.2zM6.476 10v7H9v-7H6.477zm4.605 0v7h2.523v-3.826c0-1.14.813-1.303 1.057-1.303s.897.245.897 1.303V17H18v-3.826C18 10.977 17.024 10 15.803 10s-1.873.407-2.198.977V10h-2.523z"
                  />
                </svg>
              </SubtleLink>
            )}
            {twitter && (
              <SubtleLink href={twitter}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    fill="currentColor"
                    d="M5 3c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5zm0 2h14l.002 14H5V5zm9.566 2.113A2.488 2.488 0 0 0 12.08 9.6c0 .257.086.428.086.6-2.057-.086-3.857-1.114-5.057-2.571-.257.343-.343.77-.343 1.2 0 .856.429 1.544 1.115 2.144-.428-.086-.772-.173-1.115-.344 0 1.2.856 2.143 1.97 2.4-.257.086-.428.086-.685.086-.086 0-.259-.086-.43-.086.343.943 1.2 1.713 2.315 1.713-.857.6-1.972 1.03-3.086 1.03h-.6c1.114.684 2.4 1.115 3.771 1.115 4.543 0 7.03-3.773 7.03-7.03v-.343a5.786 5.786 0 0 0 1.201-1.287c-.514.258-.943.343-1.457.43.514-.343.942-.772 1.113-1.372-.429.257-.943.514-1.543.6-.429-.514-1.113-.772-1.799-.772z"
                  />
                </svg>
              </SubtleLink>
            )}
            {link && (
              <SubtleLink href={link}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    fill="currentColor"
                    d="M6 7a5 5 0 0 0 0 10h4v-2H6a3 3 0 1 1 0-6h4V7H6zm8 0v2h4a3 3 0 1 1 0 6h-4v2h4a5 5 0 0 0 0-10h-4zm-7 4v2h10v-2H7z"
                  />
                </svg>
              </SubtleLink>
            )}
          </Flag>
        )
      }}
    </SanityImage>
  </PersonItem>
)

const PersonItem = styled.li`
  margin-bottom: ${spacing.mediumPlus};
  padding-bottom: ${spacing.mediumPlus};
  &:not(:last-child) {
    border-bottom: 1px solid ${color.line};
  }
`

const SubtleLink = styled.a`
  text-decoration: none;
  color: ${color.wcag};
  &:hover,
  &:focus,
  &:active {
    color: ${color.primary};
    outline: none;
  }
`

const Title = styled.div`
  text-transform: uppercase;
  color: ${color.primary};
  font-size: ${font.h6};
`

export default Person
