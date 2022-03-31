import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const CardProject = ({
  data: { id, descripcion, img, tecnologias, title, urlRepo, urlView },
}) => {
  return (
    <Card sx={{
      height: '480px'
    }}>
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
          image={img}
          width="50px"
          height="150px"
          alt="imagen referente al proyecto"
        />
      </CardActionArea>
      <CardContent>
        <Typography variant="button">{title}</Typography>
        <Typography component="div">{descripcion}</Typography>

        <Typography component="div">
          <List dense={true}>
            {tecnologias.map((el, index) => (
              <ListItem key={index}>
                <ListItemText>{el}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button href={urlRepo} target="_blank" size="small" variant="contained">
          View Code
        </Button>
        <Button href={urlView} size="small" target="_blank" variant="contained">
          View online
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardProject;
