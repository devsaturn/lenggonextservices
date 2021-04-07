import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import { Parallax } from 'react-scroll-parallax';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        justifyItems: 'center',
        height: 220,
    },
  }));

function Expert() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Parallax y={[-20, -60]} tagOuter="figure">
                <Typography gutterBottom variant="h5" color="textSecondary" component="h2" align="center">
                    Les références de notre expert     
                </Typography>
            </Parallax>
            <Parallax y={[0, -40]} tagOuter="figure" className={classes.gridList}>
            <GridList cellHeight={120}  cols={8} >
                <GridListTile cols={1} style={{height:'80px', margin:'2px'}}>
                    <img src="/references/bouyguesUniversityWB.png" alt="bouyguesUniversity"
                    style={{width: '120px', height:'80px'}}/>
                </GridListTile>
                <GridListTile cols={1} style={{height:'80px', margin:'2px'}}>
                    <img src="/references/cnamWB.png" alt="cnam"
                    style={{width: '120px', height:'50px', marginTop:'10px'}}/>
                </GridListTile>
                <GridListTile cols={1} style={{height:'80px', margin:'4px'}}>
                    <img src="/references/eptbWB.png" alt="eptb"
                    style={{width: '150px', height:'60px', marginTop:'10px'}}/>
                </GridListTile>
                <GridListTile cols={1} style={{height:'80px', margin:'4px'}}>
                    <img src="/references/gpamWB.png" alt="gpam"
                    style={{width: '120px', height:'70px'}}/>
                </GridListTile>
                <GridListTile cols={1} style={{height:'80px'}}>
                    <img src="/references/nexityWB.png" alt="nexity"
                    style={{width: '70px', height:'70px'}}/>
                </GridListTile>
                <GridListTile cols={1} style={{height:'80px'}}>
                    <img src="/references/pmaWB.png" alt="pma"
                    style={{width: '100px', height:'60px'}}/>
                </GridListTile>
                <GridListTile cols={1} style={{height:'100px'}}>
                    <img src="/references/quaiBranlyWB.png" alt="quaiBranly"
                    style={{width: '100px', height:'90px'}}/>
                </GridListTile>
                <GridListTile cols={1} style={{height:'80px'}}>
                    <img src="/references/ratpRealEstateWB.png" alt="rre"
                    style={{width: '150px', height:'80px'}}/>
                </GridListTile>
                <GridListTile cols={1} style={{height:'110px'}}>
                    <img src="/references/ratpWB.png" alt="ratp"
                    style={{width: '95px', height:'80px'}}/>
                </GridListTile>
                <GridListTile cols={1} style={{height:'100px'}}>
                    <img src="/references/sempariseineWB.png" alt="sempariseine"
                    style={{width: '120px', height:'80px'}}/>
                </GridListTile>
                <GridListTile cols={1} style={{height:'80px'}}>
                    <img src="/references/sncfWB.png" alt="sncf"
                    style={{width: '150px', height:'80px'}}/>
                </GridListTile>


            </GridList>
            </Parallax>
        </div>
    )
}

export default Expert
