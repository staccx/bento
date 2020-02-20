import React, { useEffect, useState } from "react";
import { Badge, Button, IconButton, TooltipLinkList, WithTooltip } from "@storybook/components";
import addons, { types } from "@storybook/addons";
import styled from "styled-components";
import { useAddonState, useChannel, useParameter, useStorybookState } from "@storybook/api";
import { ThemeIcon } from "../withThemes";

export const VARIANTS_TOOL_NAME = "bento-variants";


export const Variants = ({ api }) => {
  const [expanded, setExpanded] = useState(false);
  const [variants, setVariants] = useState([]);
  const [theme] = useAddonState("theme-switcher", null);
  const [currentVariant, setCurrentVariant] = useState(null);
  const component = useParameter("component", "something");
  const { storyId, storiesHash } = useStorybookState();

  useEffect(() => {
    if (component && theme) {
      if (theme.hasOwnProperty(component)) {
        setVariants([{
          id: "none",
          title: "None",
          onClick: () => {
            setCurrentVariant(null)
            api.getChannel().emit("variant_changed", null)
          }
        }, ...Object.keys(theme[component]).map(variant => ({
          id: variant,
          title: variant,
          onClick: () => {
            setCurrentVariant(variant);
            api.getChannel().emit("variant_changed", variant)
          }
        }))]);
      } else {
        setVariants([]);
      }
    }
    return () => {
      setCurrentVariant(null)
      api.getChannel().emit("variant_changed", null)
    }
  }, [component, theme, storyId]);

  if(variants.length === 0) {
    return <IconButton key="variants">{"No variants"} </IconButton>
  }
  return (
    <WithTooltip
      placement="top"
      trigger="click"
      tooltipShown={expanded}
      onVisibilityChange={s => setExpanded(s)}
      tooltip={<TooltipLinkList links={variants}/>}
      closeOnClick
    >
      <FlexIt>
        <IconButton key="variants">{currentVariant || "ChooseVariant"} </IconButton>
      </FlexIt>
    </WithTooltip>
  );
};

const FlexIt = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0,0,0,.2);
  border-radius: 8px;
  padding: 0 12px;
  min-width: 100px;
  margin: 0 24px
`;

function bindThemeOverride (api) {

  // channel.on('storiesConfigured', () => {
  //   setLocalTheme({ api });
  // });
  // channel.on('storyChanged', () => {
  //   setLocalTheme({ api });
  // });
}
