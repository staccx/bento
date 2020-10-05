import React from "react";
import { IconButton, TooltipLinkList, WithTooltip } from "@storybook/components";
import styled from "styled-components";
import { useGlobals } from "@storybook/api";
import { locales } from "../locales";

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
      expandedSet(false)
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
        <IconButton key="locale-selector">{locale.title} {locale?.right}</IconButton>
      </FlexIt>
    </WithTooltip>
  );
};

export const FlexIt = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0 12px;
  min-width: 100px;
`;
