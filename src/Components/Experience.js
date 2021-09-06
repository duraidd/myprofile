import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import React from "react";
import ComputerIcon from "@material-ui/icons/Computer";
import { makeStyles, Typography, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
    flexWrap:'wrap',
    '&:hover': {
      backgroundColor: "#F96D15",
       color:'white'
      
      }
    
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
 
  textCenter: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  jj:{
    color:"white"
  }
}));

function Experience() {
  const classes = useStyles();
  return (
    <div  style={{padding:"2%"}}>
      <Typography variant="h5" className={classes.textCenter}>
        Experience
      </Typography>
      <Timeline align="right">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" className={classes.jj}>
              Developer
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <ComputerIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper} >
              <Typography variant="h6" component="h1">
                Netcom Computer Pvt Ltd
              </Typography>
              <Typography variant="subtitle1">Dec 2020 - Present</Typography>
              <Typography variant="subtitle1">Tirunelveli,Tamilnadu</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        
      </Timeline>
      
    </div>
  );
}

export default Experience;
