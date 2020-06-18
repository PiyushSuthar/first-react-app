import React, { useState, useEffect } from "react";
import Cards from "../components/HomePageCards";
import { Grid, TextField } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppPage from "../components/appPage";
import Header from "../layout/header";

export default function MainBody() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  var [Effectvalue, setEffectValue] = useState("");

  function input(e) {
    var code = e.keyCode || e.which;
    if (code === 13) {
      setIsLoading(true);
      setEffectValue(e.target.value);
    }
  }

  useEffect(() => {
    setSearch(Effectvalue);
  }, [Effectvalue]);

  useEffect(
    function() {
      fetch("https://piyushsuthar.herokuapp.com/api/apps/?q=" + search)
        .then(res => res.json())
        .then(
          result => {
            setIsLoading(false);
            setData(result.results);
          },
          error => {
            setIsLoading(false);
            setData(error);
          }
        );
    },
    [search]
  );

  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/about">
          <Grid>
            <Grid item-xs={12}>
              <Grid container justify="center">
                <Grid item>
                  <Link to="/">Home</Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Route>
        <Route path="/users">
          <h1>User Place</h1>
          <Link to="/">Home</Link>
        </Route>
        <Route exact path="/app/:id">
          <AppPage />
        </Route>
        <Route path="/">
          <Grid container justify="center">
            <Grid item xs={8}>
              <TextField
                id="outlined-required"
                label="Search"
                variant="outlined"
                fullWidth
                onKeyPress={input}
              />
            </Grid>
          </Grid>
          <Grid style={{ marginTop: "10px" }}>
            <Grid item-xs={12}>
              <Cards data={data} loading={isLoading} />
            </Grid>
          </Grid>
        </Route>
      </Switch>
    </Router>
  );
}
