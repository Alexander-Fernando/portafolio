import { createContext, useState } from 'react';

export const TemaContext = createContext();

export const TemaProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  return (
    <TemaContext.Provider
      value={{
        mode,
        setMode,
      }}
    >
      {children}
    </TemaContext.Provider>
  );
};
