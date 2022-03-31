import { createContext, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Config/Firestore';

export const TemaContext = createContext();

export const TemaProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const cargarDataProyectos = async () => {
    return await getDocs(collection(db, 'proyectos'));
  };

  return (
    <TemaContext.Provider
      value={{
        mode,
        setMode,
        cargarDataProyectos,
      }}
    >
      {children}
    </TemaContext.Provider>
  );
};
