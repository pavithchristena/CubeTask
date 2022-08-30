import { Avatar, Typography, Divider } from "@mui/material";
import img1 from "../assets/images/avatar_1.png";
// import "../App.css";
import "./Sidebar.css";
import React, { useState } from "react";
import { SidebarData } from "../Data/Data";
import { motion } from "framer-motion";
import { height } from "@mui/system";

const Profile = () => {
  // const root = {
  //   display: "flex",
  //   flexDirection: "column",
  //   // alignItems: 'center',
  //   minHeight: "fit-content",
  //   // marginRight:"100px",
  //   marginTop: "55px",
  // };
  const avatarStyle = {
    width: 60,
    height: 60,
  };
  const user = {
    name: "Pavithra",
    bio: "Software Trainee",
  };

  const divider={
    width:"140px"
  }
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  console.log(window.innerWidth);
  return (
    <div className="profile">
      <div className="avatar">
        <Avatar style={avatarStyle} alt="Pavithra" src={img1} />
        <Typography variant="h6">
          <span color="black">{user.name}</span>
        </Typography>
        <Typography variant="h7">{user.bio}</Typography> <br />
        
      </div>
     <center> <Divider style={divider}/><br/></center>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      ></div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
          {/* signoutIcon */}
          <div className="menuItem"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
