import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'


function Fondateur() {
    const sloganPhrase1 = "L\’innovation sociale et l\’humain au centre des solutions,"
    const sloganPhrase2 = "en favorisant l\’égalité des chances et de traitement"


    return (
        <div>
            
                    <Typography variant="subtitle1" color="textSecondary" component="h2">
                    <FaQuoteLeft size={20} color={"#FF4D4F"}/>   
                            {sloganPhrase1}
                    </Typography>
                    <br/>
                    <Typography variant="subtitle1" color="textSecondary" component="h2">
                        
                            {sloganPhrase2}
                            <FaQuoteRight size={20} color={"#FF4D4F"}/>
                    </Typography>
        
        </div>

    )
}

export default Fondateur
