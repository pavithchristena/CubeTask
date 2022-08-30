import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import img2 from "../assets/images/github.svg";
import img3 from "../assets/images/slack.svg";
import img from "../assets/images/logo.svg";
import "./Header.css";

const Header = () => {
  const appstyle = {
    boxShadow: "none",
    backgroundColor: "#43436B",
  };

  return (
    <>
      <div className="appstyle">
        <AppBar style={appstyle}>
          <Toolbar>
            <img alt="logo" src={img} />
            <div className="link">
              <a
                className="git"
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/pavithchristena"
              >
                <img width="20px" color="white" alt="GitHub" src={img2} />
                <span> Github </span>
              </a>
              <a className="git" href="https://github.com/pavithchristena">
                <img alt="Slack" src={img3} />
                <span>Slack</span>
              </a>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <br></br>
    </>
  );
};

export default Header;
