import { Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Footer = () => {
  return (
    <Grid container backgroundColor="primary.main">
      <Grid
        item
        xs={12}
        p={3}
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            sm: 'row-reverse'},
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        {/* links sociales */}
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Link
            sx={{
              color: 'primary.contrastText',
              '&:hover': {
                transition: 'all .5s ease',
                color: 'secondary.light',
              },
            }}
            mx={2}
            underline="none"
            href="https://github.com"
          >
            Github
          </Link>
          <Link
            mx={2}
            sx={{
              color: 'primary.contrastText',
              '&:hover': {
                transition: 'all .5s ease',
                color: 'secondary.light',
              },
            }}
            underline="none"
            href="https://linkedin.com"
          >
            Linkedin
          </Link>
          <Link
            mx={2}
            underline="none"
            href="mailto:alexander.glzprd@hotmail.com"
            sx={{
              color: 'primary.contrastText',
              '&:hover': {
                transition: 'all .5s ease',
                color: 'secondary.light',
              },
            }}
          >
            Correo
          </Link>
        </Box>

        {/* NOMBRE FOOTER */}
        <Typography
          component="div"
          align="center"
          variant="h6"
          sx={{
            color: 'text.secondary',
            fontWeight: 'bold',
          }}
        >
          Fernando Alexander - 2022
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
