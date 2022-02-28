import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import { useContext } from 'react';
import { TemaContext } from '../Context/ThemeContextProvider.';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

// const label = { inputProps: { 'aria-label': 'Change theme' } };

const Navbar = () => {
  const { mode, setMode } = useContext(TemaContext);

  return (
    <>
      <AppBar
        position="fixed"
        style={{
          boxShadow: '0px 8px 25px rgba(0,0,0,0.05)',
          backgroundColor: 'primary.main',
        }}
      >
        <Toolbar
          style={{
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <Typography component="div" variant="h6" color="white">
            AlexanderWeb
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant="h7">Proyectos</Typography>
            <IconButton
              sx={{
                ml: 1,
              }}
              onClick={() =>
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
              }
            >
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
