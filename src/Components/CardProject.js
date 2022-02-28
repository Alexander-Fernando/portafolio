import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

const CardProject = () => {
  return (
    <Card>
      <CardActionArea
        sx={{
          '&:hover': {
            transform: 'scale(1.1) rotateY(5deg)',
            transition: 'all .8s ease',
          },
        }}
      >
        <CardMedia
          component="img"
          image="https://www.eltiempo.com/files/og_paste_img/uploads/2020/12/11/5fd3fae6afe94.jpeg"
          alt="imagen referente al proyecto"
        />
      </CardActionArea>
      <CardContent>
        <Typography variant="button">01 / Project Name</Typography>
        <Typography component="div">
          Globin concept digital sculpture with human like skin. Learned a lot
          of quick tips and look develpment.
        </Typography>

        <Typography component="div" mt={4}>HTML5, Css3, Javascript, Material UI</Typography>
      </CardContent>
      <CardActions sx={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Button size="small" variant="contained">
          View Code
        </Button>
        <Button size="small" variant="contained">
          View online
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardProject;
