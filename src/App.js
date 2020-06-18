import React from "react";
import { Container } from "@material-ui/core";
import MainBody from "./layout/mainbody";

export default function App() {
  return (
    <>
      <Container maxWidth="lg">
        <MainBody />
      </Container>
    </>
  );
}
