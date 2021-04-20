import styled, { css } from "styled-components"
import { darken, lighten } from "polished"
import mapProp from "../../../theming/utils/mapProp"

const color = "#313131"
const shadow = darken(10, color)
const panel = "#222"

export const Frame = styled.div``
export const Stripe = styled.div``
export const Header = styled.div``
export const Sensors = styled.div``
export const Buttons = styled.div``
export const Power = styled.div``
export const Content = styled.div``
export const IphoneX = css`
  height: 868px;
  width: 428px;

  ${Frame} {
    border-radius: 68px;
    box-shadow: inset 0 0 2px 2px ${shadow}, inset 0 0 0 7px ${color};
    padding: 28px;
  }
  ${Content} {
    background: ${p => console.log(p) || p.background || color};
    border-radius: 40px;
    height: 812px;
    width: 375px;
    padding-top: 36px;
    margin: 0 auto;
  }

  ${Stripe} {
    &::after,
    &::before {
      border: solid rgba(#333, 0.25);
      border-width: 0 7px;
      content: "";
      height: 7px;
      left: 0;
      position: absolute;
      width: 100%;
      z-index: 9;
    }
    &::after {
      top: 85px;
    }
    &::before {
      bottom: 85px;
    }
  }

  ${Header} {
    background: ${panel};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    height: 30px;
    left: 50%;
    margin-left: -102px;
    position: absolute;
    top: 28px;
    width: 204px;

    &::after,
    &::before {
      content: "";
      height: 10px;
      position: absolute;
      top: 0;
      width: 10px;
    }
    &::after {
      background: radial-gradient(
        circle at bottom left,
        transparent 0,
        transparent 75%,
        ${panel} 75%,
        ${panel} 100%
      );
      left: -10px;
    }
    &::before {
      background: radial-gradient(
        circle at bottom right,
        transparent 0,
        transparent 75%,
        ${panel} 75%,
        ${panel} 100%
      );
      right: -10px;
    }
  }

  ${Sensors} {
    &::after,
    &::before {
      content: "";
      position: absolute;
    }
    &::after {
      background: #444;
      border-radius: 3px;
      height: 6px;
      left: 50%;
      margin-left: -25px;
      top: 32px;
      width: 50px;
    }
    &::before {
      background: #444;
      border-radius: 50%;
      height: 14px;
      left: 50%;
      margin-left: 40px;
      top: 28px;
      width: 14px;
    }
  }

  ${Buttons} {
    background: ${shadow};
    height: 32px;
    left: -3px;
    position: absolute;
    top: 115px;
    width: 3px;

    &::after,
    &::before {
      background: ${shadow};
      content: "";
      height: 62px;
      left: 0;
      position: absolute;
      width: 3px;
    }

    &::after {
      top: 60px;
    }
    &::before {
      top: 140px;
    }
  }

  ${Power} {
    background: ${shadow};
    height: 100px;
    right: -3px;
    position: absolute;
    top: 200px;
    width: 3px;
  }
`
export const IpadPro = css`
  height: 804px;
  width: 560px;

  ${Frame} {
    background: ${panel};
    border-radius: 38px;
    box-shadow: inset 0 0 0 2px ${shadow}, inset 0 0 0 6px ${color};
    padding: 62px 25px;
  }

  // 2224-by-1668-pixel resolution
  ${Content} {
    background: ${p => console.log(p) || p.background || color};
    border: 2px solid #222;
    border-radius: 2px;
    height: 680px;
    width: 510px;
  }

  // Home button
  ${Header} {
    border: 2px solid ${shadow};
    border-radius: 50%;
    bottom: 17px;
    height: 34px;
    left: 50%;
    margin-left: -17px;
    position: absolute;
    width: 34px;
  }

  ${Sensors} {
    background: #666;
    border-radius: 50%;
    height: 10px;
    left: 50%;
    margin-left: -5px;
    margin-top: -5px;
    position: absolute;
    top: 34px;
    width: 10px;
  }
`
export const MacBookPro = css`
  height: 444px;
  width: 740px;

  ${Frame} {
    transition: all 0.5s ease;
    background: ${panel};
    border-radius: 20px;
    box-shadow: inset 0 0 0 2px ${shadow}, inset 0 0 0 6px ${color};
    margin: 0 auto;
    padding: 29px 19px 39px 19px;
    position: relative;
    width: 614px;

    &::after {
      background: ${lighten(0.1, panel)};
      border-radius: 0 0 20px 20px;
      bottom: 2px;
      content: "";
      height: 26px;
      left: 2px;
      position: absolute;
      width: 100%;
    }
    &::before {
      bottom: 10px;
      color: ${lighten(0.5, panel)};
      content: "MacBook Pro";
      font-size: 12px;
      height: 16px;
      left: 50%;
      line-height: 16px;
      margin-left: -100px;
      position: absolute;
      text-align: center;
      width: 200px;
      z-index: 1;
    }
  }

  ${Content} {
    background: ${p => console.log(p) || p.background || color};
    border: 2px solid ${lighten(0.02, panel)};
    border-radius: 2px;
    height: 360px;
  }

  ${Power} {
    background: ${color};
    border: solid ${darken(0.05, color)};
    border-radius: 2px 2px 0 0;
    border-width: 2px 4px 0 4px;
    height: 14px;
    margin-top: -10px;
    position: relative;
    width: 740px;
    z-index: 9;

    &::after,
    &::before {
      content: "";
      position: absolute;
    }
    &::after {
      background: ${lighten(0.05, shadow)};
      border-radius: 0 0 10px 10px;
      box-shadow: inset 0 0 4px 2px ${darken(0.05, shadow)};
      height: 10px;
      left: 50%;
      margin-left: -60px;
      top: -2px;
      width: 120px;
    }
    &::before {
      background: ${darken(0.15, shadow)};
      border-radius: 0 0 180px 180px/ 0 0 12px 12px;
      box-shadow: inset 0 -2px 6px 0 ${darken(0.5, shadow)};
      height: 12px;
      left: -4px;
      margin: 0 auto;
      top: 10px;
      width: 740px;
    }
  }
`
export const Device = styled.div`
  position: relative;
  transform: scale(1);
  z-index: 1;

  ${mapProp(
    "type",
    {
      iphoneX: IphoneX,
      ipadPro: IpadPro,
      macbookPro: MacBookPro
    },
    IphoneX
  )}

  ${Frame} {
    z-index: 1;
  }

  ${Content} {
    background-color: #fff;
    background-position: center center;
    background-size: cover;
    object-fit: cover;
    position: relative;
  }
`
