import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import PropTypes from "prop-types";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";

import Drawer from "@material-ui/core/Drawer";

import Menu from "@material-ui/icons/Menu";

import styles from "/assets/jss/material-kit-react/components/headerStyle.js";

const useStyles = makeStyles(styles);

function Profile(props) {
  render {
    return (
      <>
        <div className="bkgrd-img">
          <header>
            <div className="nav-bar ">
              <nav>
                <Link to="" >About</Link>{' | '}
                <Link>Projects</Link>{' | '}
                <Link>Contact</Link>{' | '}
              </nav>
            </div>
          </header>
          <body>
            <div className="contents">
              <div className="about">
                <h1>About</h1>
                <p>My name is Garrison, a musician and service industry worker turned full stack engineer</p>

              </div>
            </div>
          </body>
        </div>
      </>
    )
  }



}

export default Profile;

