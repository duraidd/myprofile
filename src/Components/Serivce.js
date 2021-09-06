import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Card from "@material-ui/core/Card";

export default function Serivce() {
  const useStyle = makeStyles((theme) => ({
    centerText: {
      textAlign: "center",
      fontSize: "24px",
      padding: theme.spacing(2),
      fontWeight: "bold",
    },
    centerTextCard: {
      textAlign: "center",
      fontSize: "20px",
      padding: theme.spacing(2),
      fontWeight: "bold",

    },
    myCard: {
    [theme.breakpoints.up('md')]:{
      height: 300, width: 400,
      padding: theme.spacing(3),
      '&:hover': {
        
        backgroundColor: "#F96D15",
       color:'white'
    }
     },
    [theme.breakpoints.down('md')]:{
      height: 300, width: 300,
      padding: theme.spacing(3),
      '&:hover': {
        
        backgroundColor: "#F96D15",
       color:'white'
    }
    } 


    },
    root: {
        flexGrow: 1,
        padding: theme.spacing(1),
      },
      rootBg: {
        padding: theme.spacing(2),
        // background: "linear-gradient(to left bottom, #CDF0EA, #E4EFE7)",
      },
  }));

  const title = [
    "Android Development",
    "Web Development",
    "UI/UX Design",
    "Database",
  ];

  const description = [
    "Writing clean and efficient codes for Android applications. Monitoring the performance of live apps and work on optimizing them at the code level. Identifying and resolving bottlenecks, rectifying bugs and enhancing application performance",
    "A Web Developer is responsible for the coding, design and layout of a website according to a company's specifications. As the role takes into consideration user experience and function, a certain level of both graphic design and computer programming is necessary.",
    "Creating user-centered designs by understanding business requirements, and user feedback. Creating user flows, wireframes, prototypes and mockups. Translating requirements into style guides, design systems, design patterns and attractive user interfaces.",
    "Design database systems. Database Developers' main responsibility is to analyze the needs of an organization and produce an effective database system according to their needs and specifications.This involves troubleshooting any potential problems, creating and submitting test reports and database improvement.",
  ];

  const classes = useStyle();
  return (
    <div className={classes.rootBg}>
      <div style={{display:'flex',justifyContent:'center'}}>
      <Card style={{maxWidth:'auto',borderRadius:'30px'}}>
      <Typography  className={classes.centerText} style={{background:'white'}}> My Experience </Typography>
      </Card>
      </div>
      <Grid container  className={classes.root}  spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {title.map((value,i) => (
            <Grid key={value} item>
              <Card  className={classes.myCard}  >
                <Typography variant="h5" className={classes.centerTextCard}>{value} </Typography>
                  <Typography  variant="body1">{description[i]}</Typography>
                  </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
</Grid>
    </div>
  );
}
