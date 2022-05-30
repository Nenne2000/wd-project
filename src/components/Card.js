import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CardActions } from '@mui/material';
import { Button } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345}}>
      <div style={{ color:'white', backgroundColor: "#484848"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require('../images/Card1.png')}
          alt="una ruspa"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            INFORMAZIONI
          </Typography>
          <Typography variant="body2" color="white">
          informazioni veloci riguardanti l’argomento della card in modo da spiegare velocemente di cosa si tratterà
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant= 'contained' size="small" sx={{background: "#212121"}}>
          Scopri di più
        </Button>
      </CardActions>
      </div>
    </Card>
  );
}