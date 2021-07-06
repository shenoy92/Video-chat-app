import React, { useContext } from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';
import Video1 from './Video1'
import { SocketContext } from '../Context';
import useStyles from './styles'

  const Video2=()=>{
    const { userVideo,call} = useContext(SocketContext);
    const classes = useStyles();
    return(
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
            <video playsInline ref={userVideo} autoPlay className={classes.video} />
             
            
          
          </Grid>
        </Paper>
    )
}

export default Video2;