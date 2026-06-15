"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: dark;
    --bg: #282a36;
    --surface: rgba(40, 42, 54, 0.92);
    --surface-2: #44475a;
    --text: #f8f8f2;
    --muted: #b9bbca;
    --border: rgba(248, 248, 242, 0.12);
    --pink: #ff79c6;
    --purple: #bd93f9;
    --cyan: #8be9fd;
    --green: #50fa7b;
    --orange: #ffb86c;
    --red: #ff5555;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    background: var(--bg);
  }

  body {
    margin: 0;
    min-height: 100vh;
    background:
      radial-gradient(circle at top left, rgba(189, 147, 249, 0.12), transparent 28%),
      radial-gradient(circle at bottom right, rgba(139, 233, 253, 0.1), transparent 24%),
      var(--bg);
    color: var(--text);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  ::selection {
    background: rgba(255, 121, 198, 0.28);
    color: var(--text);
  }
`;

export default GlobalStyle;
