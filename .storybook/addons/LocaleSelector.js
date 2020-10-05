import React from "react";
import { IconButton, TooltipLinkList, WithTooltip } from "@storybook/components";
import { useGlobals } from "@storybook/api";
import { locales } from "../locales";
import { FlexIt } from "./ThemeSwitcher";

export const LocaleSelector = ({ api }) => {
  const [{ locale: activeLocale }, setGlobal] = useGlobals();
  const locale = activeLocale ? locales[activeLocale.id] : null;
  const [expanded, expandedSet] = React.useState(false);
  const localeList = React.useMemo(() => locales.map((local, index) => ({
    ...local,
    key: index,
    onClick: () => {
      setGlobal({
        locale: {
          ...local,
          id: index,
          data: null
        }
      });
      expandedSet(false);
    }
  })), []);

  if (!locale) {
    return null;
  }
  return (
    <WithTooltip
      placement="top"
      trigger="click"
      tooltipShown={expanded}
      onVisibilityChange={expandedSet}
      tooltip={<TooltipLinkList links={localeList}/>}
      closeOnClick
    >
      <FlexIt>
        <IconButton key="locale-selector">{locale.title} </IconButton><span>{locale?.right}</span>
      </FlexIt>
    </WithTooltip>
  );
};
