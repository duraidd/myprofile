import React from "react";
import { Grid, makeStyles} from "@material-ui/core";
import "../CSS/style.css";
import { Typography } from "@material-ui/core";
import { SocialIcon } from "react-social-icons";
export default function Footer() {
  const useStyle = makeStyles((theme) => ({
    root: {
      background: "linear-gradient(to left bottom, #CDF0EA, #E4EFE7)",
    },
    root1: {
      backgroundColor: "red",
      padding: theme.spacing(5),
    },
  }));
  const link = [
    "https://www.youtube.com/c/GaneshJDev",
    "https://www.instagram.com/mb_ga.ne.sh_dev/",
    "https://www.linkedin.com/in/ganesh-jdev/",
    "https://github.com/mbganesh",
  ];

  const classes = useStyle();
  return (
    <>
      <div className={classes.root}>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <div class="bg"></div>
              <div class="bg bg2"></div>
              <div class="bg bg3"></div>
              <div class="content">
              <Typography variant="h5" style={{padding:'5px'}}>Durai</Typography>
              <Typography variant="h5" style={{padding:'5px'}}>+91 9702470579</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div class="bg"></div>
              <div class="bg bg2"></div>
              <div class="bg bg3"></div>
              <div class="content">
                <Typography variant="h5" style={{padding:'5px'}}>Connect</Typography>
                

                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Grid container justify="center" spacing={5}>
                      {link.map((value) => (
                        <Grid key={value} item>
                          <SocialIcon url={value} />
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
