import React from "react"
import { storiesOf } from "@storybook/react"
import CodeRenderer from "./CodeRenderer"

const javaCode = `public class MyClass {
  int x = 5;

  public static void main(String[] args) {
    MyClass myObj = new MyClass();
    System.out.println(myObj.x);
  }
}`

const markupCode = `<!DOCTYPE HTML>
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

const csharpCode = `class Example
{
    ctor
}

class Program
{
    static void Main()
    {
    }
}
`

const javascriptCode = `import React from "react"

class MyApp extends React.Component {
  render() {
      return <div>Hello world!</div>
  }
}

export default MyApp`

storiesOf("Components|Base/Code Renderer", module)
  .add("Javascript", () => (
    <CodeRenderer language="javascript" code={javascriptCode} />
  ))
  .add("Markup", () => <CodeRenderer language="markup" code={markupCode} />)
  .add("Csharp", () => <CodeRenderer language={"csharp"} code={csharpCode} />)
  .add("java", () => <CodeRenderer language={"java"} code={javaCode} />)
