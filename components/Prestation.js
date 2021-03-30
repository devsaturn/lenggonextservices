import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {FaHandsHelping} from 'react-icons/fa'
import {GiMaterialsScience, GiDiploma} from 'react-icons/gi'

const useStyles = makeStyles({
    
    root: {
      maxWidth: 345,
    },
  });

const Prestation = ({prestation}) => {
    const classes = useStyles();

    console.log(prestation)
    return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={prestation.title}
            height="140"
            image={
                prestation?.type === 'formation' ?
                "/formation.jpeg" :
                prestation?.type === 'assistance' ?
                "/assistance.jpg":
                prestation?.type === 'ingenierie' ?
                '/ingenierie.jpg' :
                null
                
            }
            title={prestation.title}
          />
          <CardContent>
              <div>
              {
              prestation?.type === 'formation' ?
                <GiDiploma size={60} color={"#FF4D4F"}/> :
                prestation?.type === 'assistance' ?
                <FaHandsHelping size={60} color={"#FFA400"}/> :
                prestation?.type === 'ingenierie' ?
                <GiMaterialsScience size={60} color={"#1890FF"}/> :
                null
            }
              <Typography gutterBottom variant="h5" component="h2">
              {prestation.title}
            </Typography>


              </div>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>

      </Card>
    )
}

export default Prestation
