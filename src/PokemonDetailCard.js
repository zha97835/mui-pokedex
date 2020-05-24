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
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red, blue, purple } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles((theme) => ({
    root: {
    //   maxWidth: 345,
    },
    cardMedia: {
      height: 0,
      paddingTop: '5px',
    },
    cardContent: {
        textAlign: "center",
        // backgroundColor: purple[100],
    },
    cardAction: {
        // justifyContent:'center',
        // alignItems: "center",
        backgroundColor: blue[500],
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: purple[500],
      },
    cardHeader: {
        backgroundColor: blue[500],
    },
}));  

  const PokemonDetailCard = (props) => {
    const {pokemon, history} = props;
    const { name, id, species, height, weight, types, sprite} = pokemon;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <Card className={classes.root}>
        <CardHeader className={classes.cardHeader}
          avatar={
            <Avatar aria-label={name} className={classes.avatar}>
                <img src={fullImageUrl} style={{ width: "30px", height: "30px" }}/>
            </Avatar>
          }
          title={toFirstCharUppercase(name)}
          subheader='Click the back arrow or the image to go back'
          action={
            <IconButton aria-label="Go Back" onClick={() => history.push(`/mui-pokedex`)}>
              <ArrowBackIosIcon />
            </IconButton>
          }
        />
        <CardActionArea>
            <CardMedia className={classes.cardMedia} onClick={() => history.push(`/mui-pokedex`)}
                component="img"
                alt={name}
                title={name}                    
                className={classes.cardMedia}
                src={fullImageUrl}
                style={{ width: "300px", height: "300px"}}
            />
            <CardContent className={classes.cardContent}>                      
            </CardContent>
        </CardActionArea>
        <CardActions disableSpacing className={classes.cardAction}>
            <Typography variant="body2" color="textSecondary" component="p">
                Click the down arrow for more information
            </Typography>  
            <IconButton
                className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon />
            </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
            <Typography variant="h5">Pokemon Info:</Typography>
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
        </Collapse>
      </Card>
    );
}

export default PokemonDetailCard
