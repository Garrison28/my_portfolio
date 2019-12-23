import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
// import PropTypes from "prop-types";
// import classNames from "classnames";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import Button from "@material-ui/core/Button";
// import Hidden from "@material-ui/core/Hidden";

// import Drawer from "@material-ui/core/Drawer";

// import Menu from "@material-ui/icons/Menu";

// import styles from "/assets/jss/material-kit-react/components/headerStyle.js";

// const useStyles = makeStyles(styles);

function Profile(props) {
  return (
    <>
      <div className="bkgrd-img">
        <header>
          <div className="nav-bar ">
            <nav>
              <a href="" >About</a>{' | '}
              <a>Projects</a>{' | '}
              <a>Contact</a>{' | '}
            </nav>
          </div>
        </header>
        <body>
          <div className="contents">
            <div className="about">
              <h1>About</h1>
              <p>My name is Garrison, a musician and service industry worker turned full stack engineer</p>

            </div>
            <div className="project">
              <h2>Projects</h2>
              <div>
                <h3>Project 1</h3>
                <a href="https://garrison28.github.io/Gold/">Gold!</a>

              </div>
              <div>
                <h3>Project 2</h3>
                <a href="https://morning-cliffs-87357.herokuapp.com/">Artist GO</a>

              </div>
              <div>
                <h3>Project 3</h3>
                <a href="https://polar-sands-42976.herokuapp.com/">Stuter</a>

              </div>
              <div>
                <h3>Project 4</h3>
                <a href='https://secret-ridge-94962.herokuapp.com'>The Photo</a>

              </div>
            </div>
            <div>
              <h2>Contact</h2>
              <span>Email: ghighsmith28@gmail.com</span>{' | '}
              <span>Linkdin: <a href='https://www.linkedin.com/in/garrison-highsmith'> My Linkdin</a></span>{' | '}
              <span>Github: <a href='https://github.com/Garrison28'> My Github</a></span>
              <div>

              </div>
              <div>

              </div>
            </div>
          </div>
        </body>
        <footer>

        </footer>
      </div>
    </>
  )
}

export default Profile;





