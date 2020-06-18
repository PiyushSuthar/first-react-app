import React, { useEffect, useState } from "react";
import { Grid, Typography, CircularProgress } from "@material-ui/core";
import SimpleCard from "./card";

export default function HomePageCards({ data, loading }) {
  const [Load, setLoad] = useState(true);
  useEffect(() => {
    setLoad(loading);
  }, [loading]);
  if (Load === false) {
    return (
      <Grid container justify="center" spacing={3}>
        {data.map((value, index) => (
          <Grid key={index} item>
            <SimpleCard content={value} link={"About"} />
          </Grid>
        ))}
      </Grid>
    );
  } else {
    return (
      <Grid container justify="center" spacing={3}>
        <Grid item>
          <CircularProgress color="secondary" />
          <Typography variant="h5">Loading...</Typography>
        </Grid>
      </Grid>
    );
  }
}
