import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { makeStyles, Typography } from "@material-ui/core";
import Quiz from '../img/quiz.jpg'
import Tirunelveli from '../img/tirunelveli.jpg'
import Thangam from '../img/thangam.jpg'

const useStyles = makeStyles((theme) => ({
  textCenter: {
    textAlign: "center",
    color:'white',
    fontSize: "28px",
    padding: theme.spacing(2),
    fontWeight: "bold",
  },
  
  img: {
    [theme.breakpoints.down("md")]: {
      width: "90%",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(1),
    },
    [theme.breakpoints.up("md")]: {
      width: "30%",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(5),
    },
  },
}));

const slideImages = [
  
  Quiz,
  Tirunelveli,
  Thangam


  
];

const title = [
  "The Quiz App",
  "Tirunelveli Tourism",
  "Thangam Vilai"
  
];

const link = [
  "https://play.google.com/store/apps/details?id=dd.durai.quizapp",
  "https://play.google.com/store/apps/details?id=com.netcom.dd",
  "https://play.google.com/store/apps/details?id=dd.durai.jsoup2",
];

export default function PlayStoreApp() {
  const classes = useStyles();
  return (
    <div className={classes.img}>
      <Typography variant="h5" className={classes.textCenter}>
       Play Store Apps
      </Typography>
      <Carousel>
        <div>
          <a href={link[0]} target="_blank">
            <img src={slideImages[0]} alt={title[0]} />
            <p className="legend">{title[0]}</p>
          </a>
        </div>
        <div>
          <a href={link[1]} target="_blank">
            <img src={slideImages[1]} alt={title[1]} />
            <p className="legend">{title[1]}</p>
          </a>
        </div>
        <div>
          <a href={link[2]} target="_blank">
            <img src={slideImages[2]} alt={title[2]} />
            <p className="legend">{title[2]}</p>
          </a>
        </div>
        
      </Carousel>
      
    </div>
  );
}
