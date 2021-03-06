import { Button, Grid, Typography, Box, Divider, Chip } from '@mui/material';
import { Icon } from '@iconify/react';
import Project from './Project';
import { useEffect } from 'react';
import { gsap } from 'gsap';

const btnStyle = {
  margin: '20px 0',
  backgroundColor: 'primary.main',
  color: 'white',
};

const Main = () => {
  useEffect(() => {
    const texto = document.querySelectorAll('.nameTitle');
    gsap.from(texto, {
      opacity: 0,
      y: 50,
      duration: 2,
    });
  }, []);

  return (
    <Grid
      container
      spacing={4}
      mt={7}
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'primary.light',
        px: {
          xs: 10,
          xl: 50,
        },
      }}
    >
      {/* ABOUT SECTION */}
      <Grid item xs={12} sm={6}>
        <Typography
          component="div"
          variant="h5"
          className="nameTitle"
          color="text.primary"
        >
          Hi I'm
        </Typography>
        <Typography
          component="span"
          color="secondary.main"
          variant="h5"
          className="nombre"
        >
          Fernando Alexander
        </Typography>
        <Typography
          component="div"
          variant="h5"
          className="nameTitle"
          color="text.primary"
        >
          Web developer :)
        </Typography>
        <Typography component="div" my={5} color="text.primary">
          Soy estudiante de ingeniería de software, actualmente enfocado al
          desarrollo web, en especial, React. Soy un apasionado de la
          tecnología, desarrollo web y autodidacta.
        </Typography>
        <Typography component="div" color="text.primary">
          Estoy en busca de mi primera oportunidad laboral para crecer
          profesionalmente y dar lo mejor de mí.
        </Typography>

        <Button
          color="primary"
          size="large"
          variant="contained"
          style={btnStyle}
          href="https://drive.google.com/file/d/127F0JKTXsOfr-T0n-VF1dVPNL8o-OWmO/view"
          target="_blank"
          fullWidth
        >
          Descargar CV
        </Button>
      </Grid>

      {/* SKILLS SECTION */}
      <Grid item xs={12} sm={6}>
        {/* MAIN SKILL SECTION */}
        <Box mb={4}>
          <Typography
            style={{
              textDecoration: 'underline',
            }}
            component="div"
            align="center"
            variant="h6"
            color="secondary.light"
          >
            Main Skill
          </Typography>
          <Typography component="div" textAlign="center" color="text.primary">
            Lenguajes de marcado de Hipertexto, programación y tecnologías que
            utilizo para el frontend. Entre ellas, HTML5, CSS3, Javascript,
            Typescript y React.
            <Box
              mt={2}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}
            >
              <Icon icon="logos:html-5" width={32} height={32} />
              <Icon icon="logos:css-3" width={32} height={32} />
              <Icon icon="logos:php" width={32} height={32} />
              <Icon icon="logos:javascript" width={32} height={32} />
              {/* <Icon
                icon="vscode-icons:file-type-typescript-official"
                width={32}
                height={32}
              /> */}
            </Box>
          </Typography>
        </Box>
        {/* HERRAMIENTAS SECTION */}
        <Box mb={4}>
          <Typography
            component="div"
            align="center"
            variant="h6"
            style={{
              textDecoration: 'underline',
            }}
            color="secondary.light"
          >
            Conocimientos
          </Typography>
          <Typography component="div" textAlign="center" color="text.primary">
            Algunas herramientas, librerías y/o frameworks: . Material UI,
            Boostrap y Styled-Components, React, Laravel.
            <Box
              mt={2}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                '& > svg': {
                  fill: 'black',
                  cursor: 'pointer',
                },
              }}
            >
              <Icon icon="logos:laravel" width={32} height={32} />
              <Icon icon="logos:react" width={32} height={32} />
              <Icon icon="logos:material-ui" width={32} height={32} />
              <Icon icon="akar-icons:bootstrap-fill" width={32} height={32} />
              <Icon
                icon="vscode-icons:file-type-styled"
                width={32}
                height={32}
              />
            </Box>
          </Typography>
        </Box>
        {/* CONOCIMIENTOS BACKEND SECTION */}
        <Box mb={4}>
          <Typography
            component="div"
            align="center"
            variant="h6"
            style={{
              textDecoration: 'underline',
            }}
            color="secondary.light"
          >
            Conocimientos Backend
          </Typography>
          <Typography component="div" textAlign="center" color="text.primary">
            También, debido a la realización de proyectos universitarios tengo
            conocimientos de Node, MongoDB, MySql y Firestore.
            <Box
              mt={2}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}
            >
              <Icon icon="logos:mysql" width={32} height={32} />
              <Icon icon="logos:nodejs" width={32} height={32} />
              <Icon icon="logos:firebase" width={32} height={32} />
              <Icon icon="logos:mongodb" width={32} height={32} />
            </Box>
          </Typography>
        </Box>
      </Grid>

      {/* DIVIDER + CHIP PROJECT SECTION  */}
      <Grid item xs={12} align="center">
        <Divider variant="middle">
          <Chip label="proyectos" />
        </Divider>
      </Grid>

      {/* PROJECT SECTION */}
      <Grid id="proyectos" item xs={12} container>
        <Project />
      </Grid>
    </Grid>
  );
};

export default Main;
