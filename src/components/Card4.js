import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { CardActions } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const onMouseOver = event => {
  const el = event.target;
  let black = "#212121";
  el.style.backgroundColor = black;
};

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345}}>
      <div style={{ color:'white', backgroundColor: "#484848"}}>
      <CardActionArea>
        <Link to='/Documenti' style={{textDecoration: 'none', color:"#ffffff", fontFamily:"Poppins"}}>
          <CardMedia
            component="img"
            height="140"
            image={require('../images/Card4.png')}
            alt="pila di documenti"
          />
          <CardContent sx={{ height : "180px"}}>
            <div className='titolocard' gutterBottom>
              DOCUMENTI
            </div>
            <div className='button'>
            Rassegne stampa e documentazione ufficiale legata ai consensi e alle richieste di analisi dell’area di interesse
            </div>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <Button variant= 'contained' size="small" onMouseEnter={event => onMouseOver(event)} sx={{background: "#212121"}}>
          <Link to='/Documenti' style={{textDecoration: 'none', color:"#ffffff", fontFamily:"Poppins"}}>Scopri di più</Link>
        </Button>
      </CardActions>
      </div>
    </Card>
  );
}