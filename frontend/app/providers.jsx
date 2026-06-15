"use client";

import GlobalStyle from "../css/global-style";
import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export function useUser() {
  return useContext(UserContext);
}

export default function Providers({ children }) {
  const [user, setUser] = useState(null);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <GlobalStyle />
        {children}
      </UserContext.Provider>
    </>
  );
}
