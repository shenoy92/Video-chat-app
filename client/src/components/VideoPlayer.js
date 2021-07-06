import React, { useContext } from 'react';
import { Grid} from '@material-ui/core';

import { SocketContext } from '../Context';
import Video1 from './Video1';
import Video2 from './Video2';
import useStyles from './styles'


const VideoPlayer = () => {
  const {callAccepted,callEnded} = useContext(SocketContext);
  const classes = useStyles();
  return (
    <Grid container className={classes.gridContainer}>
      
      
        {(!callAccepted && !callEnded) ?(<Video1/>):(<Video2/>)}
      

      {/* {callAccepted && !callEnded && (
        <Video2/>
      )} */}
    </Grid>
  );
};
                
export default VideoPlayer;