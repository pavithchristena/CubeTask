import React from "react";
import Dateprice from "./date";
import Header from "./Header";
import Profile from "./profile";
import "./sample.css";
import Vieworders from "./Vieworders";

const Sample = () => {
  return (
    <div>
      <Header />
      <div className="root">
        <div className="border">
          <div className="table">
            <div className="sidebar">
              <Profile />
            </div>
            <main>
              <div className="main">
                <div>
                  <div className="topbar">
                    <div className="box">
                      <Dateprice />
                    </div>
                    <div className="datatable">
                      <Vieworders />
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sample;
