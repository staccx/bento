import React, { useState } from "react";
import { useGlobals } from "@storybook/api";
import {
  AddonPanel,
  Source,
  Spaced,
  Title,
  Placeholder,
  WithTooltip,
  TooltipLinkList,
  IconButton
} from "@storybook/components";
import { FlexIt, ThemeIcon } from "./withThemes";
import { locales } from "../locales";

export const withI18n = (Story,context) => {
  const [{ locale }] = useGlobals();
  const [expanded, setExpanded] = useState(false);

  return (
    <WithTooltip
      placement="top"
      trigger="click"
      tooltipShown={expanded}
      onVisibilityChange={s => setExpanded(s)}
      tooltip={<TooltipLinkList links={locales}/>}
      closeOnClick
    >
      <FlexIt>
        <IconButton key="theme-switcher">{locale} </IconButton>

      </FlexIt>
    </WithTooltip>

  );
};
