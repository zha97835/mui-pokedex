import React from 'react';
import {Card, Link, Typography} from '@material-ui/core';
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
        maxWidth: '345',
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

  const PokemonDetailCard = (props) => {
    const { name, id, species, height, weight, types, history} = props;
    // const {history} = props;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    // const { front_default } = sprites;
    const classes = useStyles();
    return (
        <Card className={classes.cardRoot} sm={6} lg={6} onClick={() => history.push(`/${id}`)}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={name}
                    title={name}                    
                    className={classes.cardMedia}
                    // image={front_default}
                    src={fullImageUrl}
                    height="130"
                    style={{ width: "300px", height: "300px" }}
                />
                <CardContent className={classes.cardContent}>
                    <Typography variant="h1">{`${id}. ${toFirstCharUppercase(name)}`}</Typography>
                    <Typography variant="h3">Pokemon Info</Typography>
                    <Typography>
                        {"Species: "}
                        <Link href={species.url}>{species.name} </Link>
                    </Typography>
                    <Typography>Height: {height} </Typography>
                    <Typography>Weight: {weight} </Typography>
                    <Typography variant="h6"> Types:</Typography>
                    {types.map((typeInfo) => {
                        const { type } = typeInfo;
                        const { name } = type;
                        return <Typography key={name}> {`${name}`}</Typography>;
                    })}
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardAction}>
            <Button variant="contained" onClick={() => history.push("/")}>
                back to pokedex
            </Button>
            </CardActions>
       </Card>
    )
}

export default PokemonDetailCard
