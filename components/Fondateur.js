import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'


function Fondateur() {
    return (
        <div>
            <Card>
                <CardActionArea>
                    <Typography gutterBottom variant="h5" component="h2">
                    Fondateur : 
                    </Typography>
                    
                    <Typography variant="body2" color="textSecondary" component="p">
                        <FaQuoteLeft size={40} color={"#FF4D4F"}/>
                            <span>
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica

                            </span>
                        <FaQuoteRight size={40} color={"#FF4D4F"}/>

                    </Typography>
                </CardActionArea>
            </Card>
        </div>

    )
}

export default Fondateur
