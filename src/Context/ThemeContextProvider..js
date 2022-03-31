import { createContext, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Config/Firestore';

export const TemaContext = createContext();

export const TemaProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const cargarDataProyectos = async () => {
    return await getDocs(collection(db, 'proyectos'));

    // console.log('Snapchot: ', querySnapchot);

    // querySnapchot.forEach((proyect) => {
    //   const data = proyect.data();
    //   data.id = proyect.id;
    //   datoProyectos.push(data);
    // });
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
