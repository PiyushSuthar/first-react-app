import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Divider, Fade } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: 8,
    maxWidth: 33.33
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard({ content, link }) {
  const classes = useStyles();

  return (
    <Fade in={true}>
      <Card className={classes.root} variant="outlined">
        <Link style={{ textDecoration: "none" }} to={`app/${content.appId}`}>
          <CardContent>
            <img
              alt="Icon"
              style={{ height: "100px", borderRadius: "50%" }}
              src={content.icon}
            />
            <Typography style={{ color: "black" }} variant="h5" component="h2">
              {content.title === "TikTok - Make Your Day"
                ? "TikTok - Fuck Your Day"
                : content.title}
            </Typography>
            <Typography
              style={{ color: "black" }}
              variant="body2"
              component="p"
            >
              {content.priceText}
            </Typography>
            <Typography style={{ color: "black" }} variant="subtitle1">
              {content.summary}
            </Typography>
          </CardContent>
        </Link>
        <Divider />
        <CardActions>
          <Link style={{ textDecoration: "none" }} to={`app/${content.appId}`}>
            <Button style={{ color: "blue" }} size="small">
              View App
            </Button>
          </Link>
          <a
            rel="noopener noreferrer"
            target="_blank"
            style={{ textDecoration: "none" }}
            href={`${content.playstoreUrl}`}
          >
            <Button style={{ color: "blue" }} size="small">
              Download
            </Button>
          </a>
        </CardActions>
      </Card>
    </Fade>
  );
}
