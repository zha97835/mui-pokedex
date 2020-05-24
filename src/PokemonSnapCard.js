import React from 'react';
import {Card, Typography} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import toFirstCharUppercase from './constants';
// import Purple from '@material-ui/core/colors/purple';

const useStyles = makeStyles((theme) => ({
    cardRoot:{
        maxWidth: '300',
    },
    cardMedia: {
      margin: "auto",
    },
    cardContent: {
        textAlign: "center"
    },
    cardAction: {
        justifyContent:'center',
        alignItems: "center"
    }
  }));

  const PokemonSnapCard = (props) => {
    const {id, name, history, sprite} = props;
    const classes = useStyles();
    return (
        // <Card className={classes.cardRoot} onClick={() => history.push(`/${id}`)}>
        <Card className={classes.cardRoot}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={name}
                    title={name}                    
                    className={classes.cardMedia}
                    image={sprite}
                    style={{ width: "130px", height: "130px" }}
                />
                <CardContent className={classes.cardContent}>
                    <Typography>{`${id}. ${toFirstCharUppercase(name)}`}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardAction}>
                <Button variant="contained" size="small" color="primary" onClick={() => history.push(`/${id}`)}>
                    Show Details
                </Button>
            </CardActions>
        </Card>    
    )
}

export default PokemonSnapCard
