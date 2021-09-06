import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import ComputerIcon from '@material-ui/icons/Computer';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import SchoolIcon from "@material-ui/icons/School";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
    '&:hover':{
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

export default function Education() {
  const classes = useStyles();

  return (
    <>
      <div >
        <Typography variant="h5" className={classes.textCenter}>
          Education
        </Typography>
        <Timeline align="left">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" className={classes.jj}>
                Engineering
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot color="primary" >
                <SchoolIcon/>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  B.E - Computer Science
                </Typography>
                <Typography variant="subtitle1">CGPA : 7.8</Typography>
                <Typography variant="subtitle1">
                  Session : 2010 - 2014
                </Typography>
                <Typography variant="subtitle1">
                  Jayaraj Annapckiam C.S.I College of Engineering , Nazareth
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" className={classes.jj}>
                HSS
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <LocationCityIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  HIGHER SECONDARY 
                </Typography>
                <Typography variant="subtitle1">Mark : 63% </Typography>
                <Typography variant="subtitle1">
                  Session : 2009 - 2010
                </Typography>
                <Typography variant="subtitle1">
                  Rosemary Matriculation higher secondary school VMC
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" className={classes.jj}>
                SSE
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot color="primary">
                <LocationCityIcon />
              </TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>

            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  SECONDARY SCHOOL EXAMINATION
                </Typography>
                <Typography variant="subtitle1">Mark : 60%</Typography>
                <Typography variant="subtitle1">
                  Session : 2007 - 2008
                </Typography>
                <Typography variant="subtitle1">
                Rosemary Matriculation higher secondary school VMC
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </>
  );
}
