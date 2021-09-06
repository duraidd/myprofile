import React from "react";
import {
  AppBar,
  makeStyles,
  Toolbar,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActionArea,
  Grid,
} from "@material-ui/core";
import CakeIcon from "@material-ui/icons/Cake";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
import { SocialIcon } from "react-social-icons";
import DuraiPic from "../img/durai.jpg";


export default function Home() {
  const useStyle = makeStyles((theme) => ({
    rootBg:{
      width:'100%',
      height:'100%'
    },


    AppBar: {
      backgroundColor: "#F96D15",
    },
    
    
    centerText: {
      textAlign: "center",
      padding: theme.spacing(0.4),
    },
    details: {
      display:'flex',
      justifyContent:'center',
      padding: theme.spacing(2),
    },
    cardImageRoot: {
      [theme.breakpoints.down("md")]: {
        width: "80%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: theme.spacing(10),
      },
      [theme.breakpoints.up("md")]: {
        width: "25%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: theme.spacing(13),
      },
    },
    
    about:{
      fontWeight:'bold',
      fontSize:'24px',
      textAlign:'center',
      color:'white',
      padding:theme.spacing(3),     
    },
    aboutContent:{
      fontSize:'20px',
      textAlign:'center',
    },
  }));

  const link = [
    "https://twitter.com/DDdura",
    "https://www.instagram.com/durai_dd/",
    "https://www.linkedin.com/in/durai-dd/",
    "https://github.com/duraidd",
  ];

  const classes = useStyle();

  return (
    <>
      <div className={classes.rootBg}>

        <AppBar className={classes.AppBar}>
          <Toolbar style={{display:'flex',justifyContent:'center'}}>
          <h1>My Profile</h1>
          </Toolbar>
        </AppBar>

        <Card className={classes.cardImageRoot}>
          <CardActionArea>
            <CardMedia component="img" alt="DURAI" image={DuraiPic} />
          </CardActionArea>
          <CardContent>
            <Typography
              className={classes.centerText}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              Hello Iam 
            </Typography>
            <Typography
              className={classes.centerText}
              gutterBottom
              variant="h5"
              component="h2"
            >
              Durai Essakimuthu
            </Typography>
          </CardContent>
        </Card>
          
        <div>
          <Typography className={classes.about}>About Me</Typography>
          <div style={{marginRight:'2%',marginLeft:'2%',padding:'20px'}}>
            <Card style={{padding:'20px',borderRadius:'30px'}}>
          <Typography className={classes.aboutContent}>
            Android-developer based on Tamilnadu. I have
             experience in android development , web site design &amp;
            building and customization. Also I am good at Java , React , Adobe Illustrator , Mongo DB , UI/UX
          </Typography>
          </Card>
          </div>
         <hr style={{width:'50%' , color:'black' , marginTop:'10px' }} />        
     
        </div>

        <div className={classes.details} >
          <Card style={{padding:'20px',borderRadius:'30px'}}>
          <div style={{ display: "flex", justifyContent: "center",marginTop:10 }}>
            <Typography>
              <CakeIcon style={{ verticalAlign: "sub" }} /> 21 - 03 - 1991
            </Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "center",marginTop:10 }}>
            <Typography>
              <a
                href="tel:+919702470579"
                style={{ color: "black", textDecorationLine: "none" }}
              >
                <PhoneIcon style={{ verticalAlign: "sub" }} /> +91 9702470579{" "}
              </a>
            </Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "center",marginTop:10 }}>
            <Typography>
              <MailIcon style={{ verticalAlign: "sub" }} />
              <a
                href="mailto:duraiessakimuthu@gmail.com"
                style={{ color: "black", textDecorationLine: "none" }}
              >
                duraiessakimuthu@gmail.com
              </a>
            </Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "center",marginTop:10 }}>
            <Typography>
              <HomeIcon style={{ verticalAlign: "sub" }} />
              Tirunelveli,Tamilnadu
            </Typography>
          </div>
          </Card>
        </div>
        <hr style={{width:'25%' , color:'black' , marginBottom:'10px' , marginTop:'10px' }} />
        <div style={{display:'flex',justifyContent:'center',}}>
          <Card style={{padding:'30px',borderRadius:'30px'}}>
          <Grid container  spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={1}>
                {link.map((value) => (
                  <Grid key={value} item>
                    <SocialIcon url={value} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          </Card>
      
        </div>
        <hr style={{width:'25%' , color:'black' , marginBottom:'10px' , marginTop:'10px' }} />
      </div>
      
    </>
  );
}
