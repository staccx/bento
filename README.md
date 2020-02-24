[logo]: https://cdn.sanity.io/images/8j24leyc/production/4fdac3349ebe1799c7104608a6cd9727fb9e25f9-2188x1378.png

# What is Bento?
Bento is a set of UI components, utility functions, hooks, and other reusable parts that make up your typical React project. There are also some utilities that are made for our customers in the financial sector. When developing Bento we set out to solve some issues we had with other alternatives:
- Theming. No more having to fight with all the styles you don't want when trying to create a user interface. Nothing that prevents you from getting things exactly like you want them.
- A11y. Components should not be inaccessible by default. And should never get in the way of making something more accessible.
- Reusability. Good frontend code is hard, why reinvent the wheel every time you need to do the stuff you do again and again.

Because we want to spend our time writing the code we need, instead of overriding the code we don't need, Bento is pretty barebones in the visual department. Do not use Bento without creating your own theme.

## No conflicts
Bento depends on styled-components being available in your app. That doesn't mean you have to use styled-components everywhere in your app, but it does mean that Bento's styles won't conflict with other CSS in your app. There are a lot of things that could be bundled with Bento that we've chosen to leave out. You need to choose your own solution for things like state management, routing and data fetching. Bento is made to fit in with different approaches to these things instead of forcing you to use any particular solution.

## Server-side rendering
Most parts of Bento will work just fine with SSR if you set up SSR with styled-components correctly.

## Licenses
Bento is proprietary. It is not intended for public use. If you want to use Bento without a prior agreement with Stacc X, please get in touch with us and we'll figure something out.
