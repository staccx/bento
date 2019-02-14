import ReactHabitat from "react-habitat"
import QuantfolioMacros from "./App"

class QuantfolioWidgets extends ReactHabitat.Bootstrapper {
  constructor () {
    super()

    // Create a new container builder:
    const builder = new ReactHabitat.ContainerBuilder()

    // Register a component:
    builder.register(QuantfolioMacros).as("QuantfolioMacros")

    // Or register a component to load on demand asynchronously:
    // builder.registerAsync(() => System.import('./AnotherReactComponent')).as('AnotherReactComponent');

    // Finally, set the container:
    this.setContainer(builder.build())
  }
}

// Always export a 'new' instance so it immediately evokes:
export default new QuantfolioWidgets()
