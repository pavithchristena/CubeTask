import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import LaunchIcon from "@mui/icons-material/Launch";
import "./Header.css";

// import "./Header.css";

import Dateprice from "./date";

const Vieworders = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get("https://62a18fd6cc8c0118ef4e1022.mockapi.io/Orders")
      .then((getData) => {
        setApiData(getData.data);
      });
  });
  const tableStyle = {
    color: "black",
  };
  const Launch = {
    align: "center",
    color: "A1A1B5",
    fontSize: "1.25rem",
    position: "absolute",
  };

  return (
    <div>
      <Table className="table">
        <TableHead className="head">
          <TableRow>
            <TableCell align="left" style={tableStyle}>
              Order Id
            </TableCell>
            <TableCell align="left" style={tableStyle}>
              Order size
            </TableCell>
            <TableCell align="left" style={tableStyle}>
              Full Name{" "}
            </TableCell>
            <TableCell align="left" style={tableStyle}>
              User city
            </TableCell>
            <TableCell align="left" style={tableStyle}>
              Order price
            </TableCell>
            <TableCell align="left" style={tableStyle}>
              Status
            </TableCell>
            <TableCell align="left" style={tableStyle}>
              Created At
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="body">
          {apiData.map((data) => (
            <TableRow key={data.id}>
              <TableCell align="left">{data.Orderid}</TableCell>
              <TableCell align="left">{data.Ordersize}</TableCell>
              <TableCell align="left">
                {data.Fullname} <LaunchIcon style={Launch} />
              </TableCell>
              <TableCell align="left">{data.Usercity}</TableCell>
              <TableCell align="left">${data.Orderprice}</TableCell>
              <TableCell align="left">{data.Status}</TableCell>
              <TableCell align="left">{data.Createdat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Vieworders;
