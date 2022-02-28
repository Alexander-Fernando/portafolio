import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { createTheme, ThemeProvider } from '@mui/material';
import { useContext, useMemo } from 'react';
import { creaThemeMode } from './Utilities/ThemeApp';
import { TemaContext } from './Context/ThemeContextProvider.';

export const App = () => {
  const { mode } = useContext(TemaContext);
  const theme = useMemo(() => createTheme(creaThemeMode(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Main />
      <Sidebar />
      <Footer />
    </ThemeProvider>
  );
};
