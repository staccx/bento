import { css } from "@emotion/css";
import Bento, { useBento } from "./Bento";

export default {
  title: "Bento/Bento",
  component: Bento
};
import { theme, classNames } from "./index";

const DefaultButtonStyles = `
  border-width: 0;
  border-radius: 2px;
  padding: 2px 4px;
  cursor: pointer;
  min-height: 1.5em;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  font-size: 1rem;
  line-height: 32px;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: background 0.2s ease;

  &:hover,
  &:focus {
    outline: none;
    background-color: var(--btn-primary-bg-hover);
    color: var(--btn-primary-text-hover);
  }
`;

theme.register(
  "btn-primary",
  css`
    background-color: coral;
    color: cornflowerblue;
  `
);
theme.register(
  "btn",
  css`
    ${DefaultButtonStyles}
  `
);

theme.register(
  "container",
  css`
    --scoped-bg-color: cornflowerblue;
    --scoped-text-color: coral;
  `
);
theme.register(
  "child",
  css`
    background-color: var(--scoped-bg-color);
    color: var(--scoped-text-color);
  `
);

const Inner = () => {
  return (
    <>
      <div className={classNames("container")}>
        <div className={classNames("child")}>
          <h1>Hello World</h1>
        </div>
      </div>
      <button className={classNames(["btn-primary", "btn"])}>Click me</button>
    </>
  );
};

export const Test = () => (
  <Bento>
    <div>
      <div>test</div>
    </div>
    <div>
      <p data-bento="something">Tekst</p>
      <p>Tekst</p>
      <p>Tekst</p>
      <p>Tekst</p>
      <Inner />
      <div>
        <div>Grandchild</div>
      </div>
    </div>
  </Bento>
);
