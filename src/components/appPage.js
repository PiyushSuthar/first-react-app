import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, CircularProgress } from "@material-ui/core";

export default function AppPage() {
  let { id } = useParams();
  const [result, setResult] = useState({});
  const [Load, setLoad] = useState(true);

  useEffect(function() {
    fetch("https://piyushsuthar.herokuapp.com/api/apps/" + id)
      .then(res => res.json())
      .then(
        data => {
          setLoad(false);
          setResult(data);
        },
        error => {
          setLoad(false);
          setResult(error);
        }
      );
  });
  if (Load === false) {
    return (
      <>
        <img
          alt="Icon"
          style={{ height: "100px", borderRadius: "50%" }}
          src={result.icon}
        />
        <Typography variant="h3">
          {result.title === "TikTok - Make Your Day"
            ? "TikTok - Fuck Your Day"
            : result.title}
        </Typography>
        <Typography variant="body1">{result.description}</Typography>
      </>
    );
  } else {
    return (
      <>
        <CircularProgress />
        <Typography variant="h3">Loading...</Typography>
      </>
    );
  }
}
