import React from "react"
import styled, { css } from "styled-components"
import { color, wrapper } from "@staccx/theme"
import { hideVisually } from "@staccx/base"

const MenuButton = ({ isOpen, onClick }) => {
  return (
    <Outer>
      <Icon onClick={() => onClick()}>
        <Line isOpen={isOpen} />
        <Line isOpen={isOpen} />
        <Line isOpen={isOpen} />
        <Title>Open menu</Title>
      </Icon>
    </Outer>
  )
}

const Title = styled.span`
  ${hideVisually};
`

const Outer = styled.div`
  position: relative;
  justify-self: flex-end;
`

const Icon = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 36px;
  width: 36px;
  border: 0;
  background: none;
  padding: 3px 0;
  cursor: pointer;

  @media only screen and (min-width: ${wrapper.large}) {
    display: none;
  }

  &:hover,
  &:active,
  &:focus {
    outline: none;
  }
`

const Line = styled.i`
  height: 3px;
  width: 36px;
  background-color: ${color("primary")};
  transition: transform 0.3s ease, opacity 0.2s ease;

  ${p =>
    p.isOpen &&
    css`
      &:nth-child(1) {
        transform-origin: center left;
        transform: rotate(45deg) translate(1px, 0);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform-origin: center left;
        transform: rotate(-45deg) translate(1px, 0);
      }
    `};
`

export default MenuButton
