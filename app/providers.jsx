import GlobalStyle from "../css/global-style";

export default function Providers({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
