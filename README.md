# sbhaseen.github.io

A [Gatsby](https://www.gatsbyjs.com/) powered blog based on the basic setup of [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog).

---

## Prerequisites

- A local installation of Node Package Manager (NPM).
- A global NPM installation of Gatsby CLI.

## Getting Started

1.  **Clone the repository and install dependencies.**

    After cloning the repository, install the dependencies with NPM.

    ```shell
    npm install
    ```

1.  **Start developing.**

    Use the `develop` command of Gatsby CLI to get started.

    ```shell
    gatsby develop
    ```

1.  **Default development paths.**

    Main site `http://localhost:8000`

    GraphQL: `http://localhost:8000/___graphql`

## Styles

1. **Basic styles.**

   The styles are a mix of [Bulma](https://bulma.io) and custom SCSS modules. Bulma is applied at the overall `layout` level and the custom SCSS modules are applied to each component.

   The NPM distribution of Bulma is used and is imported in the layout component styles:

   ```scss
   @import "../../node_modules/bulma/bulma.sass";
   ```

   _Important to note:_

   - Layout should take only the `.scss` extension for styling so that it will **not** be component-scoped and will apply to all children elements. i.e.: `layout.scss`

   - Components should ideally have `.module.scss` in the file extension, This enables component-scoped styling and prevents mixups on other elements. i.e.: `someComponent.module.scss`.

1. **Syntax Highlighting.**

   The library of [highlight.js](https://highlightjs.org/) is used to render syntax highlighting of code snippets for blog posts.

   The NPM distribution of `highlight.js` is used.

   The styling component of `highlight.js` is imported in the layout component styles:

   ```scss
   @import "../../node_modules/highlight.js/styles/github.css";
   ```

   Based on the recommendation for "Custom Initialization" in the documentation, the best approach for React is to select any `pre code` elements and then apply the `highlightBlock` method. This is initialized (once) by using React's `useEffect` hook for the specific functional component (`blog-post.js`).

   E.g.:

   ```js
   useEffect(() => {
     document.querySelectorAll("pre code").forEach(block => {
       hljs.highlightBlock(block)
     })
   }, [])
   ```

## Deployment

A Gatsby package called `gh-pages` is used for ease of deployment to GitHub Pages. See the [gh-pages documentation](https://github.com/tschaub/gh-pages) for more details.

See also: [How Gatsby Works with GitHub Pages](https://www.gatsbyjs.com/docs/how-gatsby-works-with-github-pages/).

Essential commands:

```shell
npm run deploy
```

## Built with

- [Gatsby](https://www.gatsbyjs.com/): A React-based open source framework for creating websites and apps.
- [Bulma](https://bulma.io): A free, open source CSS framework based on Flexbox.
- [Highlight.js](https://highlightjs.org/): Syntax highlighting for the Web.
