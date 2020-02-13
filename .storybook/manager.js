import { addons } from '@storybook/addons';


addons.setConfig({
  previewTabs: {
    // the order of the tabs is configured by the order here
    'storybook/docs/panel': 'Documentation', // the configuration is either an object or a title string
    canvas: {
      hidden: false
    }, // canvas is here simply listed so its place as first tab
  },
});
