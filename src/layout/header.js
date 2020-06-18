import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Grid mx="10" container item-xs={10} justify="center">
      <Grid item>
        <Link style={{ color: "blue", textDecoration: "none" }} to="/">
          <Typography style={{ fontSize: 40 }} variant="h1">
            PlayApps
          </Typography>
        </Link>
        <Typography variant="subtitle1" align="center">
          A Small React Based App
        </Typography>
      </Grid>
    </Grid>
  );
}
