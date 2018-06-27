```jsx harmony
<CodeRenderer code={  `
                      /**
                    * Some summary
                    */
                    const request = require("request");
                        const options = {
                          method: "POST",
                          url: "/api/someplace",
                          headers: {},
                          formData: {
                          },
                          qs: {
                          }
                        }

                        request(options, (error, response, body) => {
                          if (error) throw new Error(error);

                          console.log(body);
                        });
                      `}
                      />
```