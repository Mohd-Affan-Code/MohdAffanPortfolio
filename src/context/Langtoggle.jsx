import { createContext, useState } from "react";

export const LanguContext = createContext();

export function LanguProvider({ children }) {
  const [langu, setLangu] = useState(false);

  return (
    <LanguContext.Provider value={{ langu, setLangu }}>
      {children}
    </LanguContext.Provider>
  );
}
