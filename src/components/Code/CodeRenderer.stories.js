import React from "react"
import CodeRenderer from "./CodeRenderer"

export default {
  title: "Components/CodeRenderer",
  component: CodeRenderer
}

export const CodeRendererJavaScript = args => <CodeRenderer {...args} />
CodeRendererJavaScript.args = {
  language: "javascript",
  code: `import React from "react"
        class MyApp extends React.Component {
          render() {
              return <div>Hello world!</div>
          }
        }
        export default MyApp`
}

export const CodeRendererJava = args => <CodeRenderer {...args} />

CodeRendererJava.args = {
  language: "java",
  code: `public class MyClass {
        int x = 5;
        public static void main(String[] args) {
          MyClass myObj = new MyClass();
          System.out.println(myObj.x);
        }
      }`
}

export const CodeRendererCSharp = args => <CodeRenderer {...args} />

CodeRendererCSharp.args = {
  language: "csharp",
  code: `class Example {
        ctor
        }
        class Program
        {
            static void Main()
            {
            }
        }`
}

export const CodeRendererMarkup = args => <CodeRenderer {...args} />

CodeRendererMarkup.args = {
  language: "markup",
  code: `<!DOCTYPE HTML>
    <html lang = "en">
  <head>
  <!-- basic.html -->
  <title>basic.html</title>
<meta charset = "UTF-8" />
</head>
<body>
<h1>Level One Headline</h1>
<p>
  This is a paragraph.
  Note that the text is automatically wrapped.
</p>
</body>
</html>`
}
