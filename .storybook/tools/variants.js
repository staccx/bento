import React, { useEffect, useState } from "react";
import { IconButton, TooltipLinkList, WithTooltip } from "@storybook/components";
import styled from "styled-components";
import { useAddonState, useGlobals, useParameter, useStorybookState } from "@storybook/api";
import themes from "../themes";

export const VARIANTS_TOOL_NAME = "bento-variants";

export const Variants = ({ api }) => {
  const [expanded, setExpanded] = useState(false);
  const [variants, setVariants] = useState([]);
  const [{theme: activeTheme}] = useGlobals()

  const theme = React.useMemo(() => {
    if(activeTheme) {
      return themes[activeTheme.id]
    }

    return null
  }, [activeTheme])
  const component = useParameter("title", null);
  const { storyId, ...rest } = useStorybookState();

  console.log(component, storyId, rest);
  useEffect(() => {
    if (component && theme) {
      if (theme.hasOwnProperty(component)) {
        setVariants([{
          id: "none",
          title: "None",
          onClick: () => {
          }
        }, ...Object.keys(theme[component]).map(variant => ({
          id: variant,
          title: variant,
          onClick: () => {
            api.getChannel().emit("variant_changed", variant);
          }
        }))]);
      } else {
        setVariants([]);
      }
    }
    return () => {
      setVariants([]);
      api.getChannel().emit("variant_changed", null);
    };
  }, [component, theme, storyId]);

  if (variants.length === 0) {
    return  <div>
      for the currently selected story, the parameter for "parameter-key" is:
    </div>
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
        <IconButton key="variants">{"ChooseVariant"} </IconButton>
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
