import React, { useContext } from 'react';
import { Grid, Paper, makeStyles,Typography} from '@material-ui/core';
import useStyles from './styles'
import { SocketContext } from '../Context';

const Video1=()=>{
    const { name, myVideo } = useContext(SocketContext);
    const classes = useStyles();
    return(
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      
    )
}

export default Video1;