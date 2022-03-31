import { Divider, Grid } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { configuracion } from '../Config/SliderConfig';
import CardProject from './CardProject';
import { TemaContext } from '../Context/ThemeContextProvider.';
import { useState, useContext, useEffect } from 'react';

const Project = () => {
  const [proyectos, setProyectos] = useState([]);
  const { cargarDataProyectos } = useContext(TemaContext);

  useEffect(() => {
    const proyects = [];
    const getDatos = async () => {
      const dataProyectos = await cargarDataProyectos();
      dataProyectos.forEach((doc) => {
        const data = doc.data();
        proyects.push({ ...data, id: doc.id });
      });
      console.log(proyects);
      setProyectos(proyects);
    };
    getDatos();
  }, []);

  return (
    <>
      <Grid item xs={12}>
        <Slider {...configuracion}>
          {proyectos.map((proyecto) => (
            <CardProject key={proyecto.id} data={proyecto} />
          ))}
        </Slider>

        <Divider
          variant="middle"
          sx={{
            my: '3rem',
          }}
        />
      </Grid>
    </>
  );
};

export default Project;
