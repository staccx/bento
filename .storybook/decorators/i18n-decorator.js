import { makeDecorator } from "@storybook/addons";
import React from "react";
import {Provider, SanityBackend} from "../../src/i18n/";

export const withi18n = makeDecorator({
  name: "i18n-decorator",
  parameterName: "i18n",
  skipIfNoParametersOrOptions: false,
  allowDeprecatedUsage: false,
  wrapper: (getStory, context) => {
    return (
      <Provider
        language="nb"
        // backend={SanityBackend}
        // backendOptions={{
        //   sanity: {
        //     projectId: "9i8b4jbr",
        //     dataset: "production",
        //     useCdn: false
        //   }
        // }}
        texts={{
          nb: {
            translation: {
              key: "value",
              key2: "other value",
              car: "{{count}} Bil",
              car_plural: "{{count}} Biler",
              interpolate: "{{balance, currency}}",
              account: "Konto",
              account_savings: "Sparekonto",
              account_funds: "Fondskonto",
              account_usage: "Brukskonto",
              blocks: [
                {
                  "_type": "block",
                  "_key": "3f1efe4b4982",
                  "style": "normal",
                  "markDefs": [],
                  "children": [
                    {
                      "_type": "span",
                      "_key": "3f1efe4b49820",
                      "text": "This is rich text ",
                      "marks": []
                    },
                    {
                      "_type": "span",
                      "_key": "3f1efe4b49821",
                      "text": "bold text",
                      "marks": [
                        "strong"
                      ]
                    },
                    {
                      "_type": "span",
                      "_key": "3f1efe4b49822",
                      "text": ". We can even format inside {{balance, currency}} of this",
                      "marks": []
                    }
                  ]
                },
                {
                  "_type": "block",
                  "_key": "7978c143c053",
                  "style": "normal",
                  "markDefs": [],
                  "children": [
                    {
                      "_type": "span",
                      "_key": "7978c143c0530",
                      "text": "New line",
                      "marks": []
                    }
                  ]
                }
              ]
            }
          }
        }}
      >
        {getStory(context)}
      </Provider>
    );
  }
});
