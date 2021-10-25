/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Nav } from "./styles";

const styles = {
    root: {
        flexGrow: 1,
    },
};

function SimpleAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h8" color="inherit">
                        <header>
                            <Nav>
                                <div className="navbar">
                                    <div className="container">
                                        <a href="#" className="navbar-brand">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="mr-2"
                                            >
                                                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                                                <circle cx="12" cy="13" r="4"></circle>
                                            </svg>
                                        </a>
                                    </div>
                                    <div>
                                        <strong>Yaroslav Kosobutckyy test task</strong>
                                    </div>
                                </div>
                            </Nav>
                        </header>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
