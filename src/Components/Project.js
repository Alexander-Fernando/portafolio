import { Divider, Grid } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { configuracion } from '../Config/SliderConfig';
import CardProject from './CardProject';

const Project = () => {
  return (
    <>
      <Grid item xs={12}>
        <Slider {...configuracion}>
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
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
