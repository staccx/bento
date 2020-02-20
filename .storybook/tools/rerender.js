import addons, { types } from "@storybook/addons";
import React from "react";
import { Button } from "@storybook/components";
import { FORCE_RE_RENDER } from "@storybook/core-events";

// addons.register("bento/rerender", api => {
//   addons.addPanel("bento/rerender", {
//     title: "rerender",
//     type: types.TOOL,
//     render: () => <Button primary onClick={() => api.emit(FORCE_RE_RENDER)}>Rerender</Button>
//   });
// });
