import { Card, CardActionArea, CardContent } from '@material-ui/core'
import React from 'react'
import {FcOrgUnit} from 'react-icons/fc'
import {GrSearchAdvanced} from 'react-icons/gr'
import {RiNumber1, RiNumber2, RiNumber3, RiNumber4} from 'react-icons/ri'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import styles from '../styles/Home.module.css'
import { Parallax } from 'react-scroll-parallax';


function Atouts() {
    return (
        <div className={styles.atouts}>
            <Paper elevation={0}>
                <Parallax y={[-20, -60]} tagOuter="figure" className={styles.cardTitle}>
                    <FcOrgUnit size={30}/>
                        <Typography variant="h6" color="textSecondary" component="h6">
                        Une démarche singulière
                        </Typography>
                </Parallax>
                <Parallax y={[0, -40]} tagOuter="figure">

                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem>
                        <ListItemIcon>
                            <CheckIcon />
                        </ListItemIcon>
                            <ListItemText primary="Sensibilisation des parties prenantes" />
                        </ListItem>
                        <ListItem>
                        <ListItemIcon>
                            <CheckIcon />
                        </ListItemIcon>
                            <ListItemText primary="Construction d'une stratégie d'achats responsables et d'intégration de la clause sociale" />
                        </ListItem>
                        <ListItem>
                        <ListItemIcon>
                            <CheckIcon />
                        </ListItemIcon>
                            <ListItemText primary="Mobilisation des opérations locaux et permettre un ancrage territorial" />
                        </ListItem>
                    </List>
                </Parallax>
            </Paper>
            <Paper elevation={0}>
                <Parallax y={[-20, -60]} tagOuter="figure" className={styles.cardTitle}>
                    <GrSearchAdvanced size={30} color={"#40a9ff"}/>
                    <Typography variant="h6" color="textSecondary" component="h6">
                        Nos atouts
                        </Typography>
                </Parallax>
                <Parallax y={[0, -40]} tagOuter="figure">
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem>
                        <ListItemIcon>
                            <CheckIcon />
                        </ListItemIcon>
                            <ListItemText primary="Expertise de plus de 7ans" />
                        </ListItem>
                        <ListItem>
                        <ListItemIcon>
                            <CheckIcon />
                        </ListItemIcon>
                            <ListItemText primary="Forte culture projet : proposition d'actions sur mesure" />
                        </ListItem>
                        <ListItem>
                        <ListItemIcon>
                            <CheckIcon />
                        </ListItemIcon>
                            <ListItemText primary="La France comme terrain d'action" />
                        </ListItem>
                    </List>
                </Parallax>
            </Paper>
        </div>
    )
}

export default Atouts
