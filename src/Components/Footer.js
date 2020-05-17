import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, CssBaseline } from "@material-ui/core";
import { username } from "../profileConfig.json";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}{username} {new Date().getFullYear()}
          </Typography>
        </Container>
      </footer>
    </div>
  );
}
