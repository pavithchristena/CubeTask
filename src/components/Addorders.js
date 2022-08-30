import React, { useState } from "react";
import { Grid, Button, TextField, Paper } from "@mui/material";
import axios from "axios";

const Addorders = () => {
  const [Orderid, setOrderid] = useState("");
  const [Ordersize, setOrdersize] = useState("");
  const [Fullname, setFullname] = useState("");
  const [Usercity, setUsercity] = useState("");
  const [Orderprice, setOrderprice] = useState("");
  const [Status, setStatus] = useState("");
  const [Createdat, setCreatedat] = useState("");

  const paperStyle = {
    padding: 20,
    height: "auto",
    width: 280,
    margin: "50px auto",
  };
  const btnstyle = { margin: "8px 0px" };
  console.log(Orderid);

  const sendDatatoAPI = () => {
    axios.post("https://62a18fd6cc8c0118ef4e1022.mockapi.io/Orders", {
      Orderid,
      Ordersize,
      Fullname,
      Usercity,
      Orderprice,
      Status,
      Createdat,
    });
  };

  return (
    <div>
      <h1>Upload Product</h1>
      <Paper elavation={20} style={paperStyle}>
        <h1>Add Orders</h1>
        <Grid>
          <Grid container spacing={0} direction="column">
            <TextField
              id="outlined-basic"
              label="id"
              value={Orderid}
              onChange={(id) => setOrderid(id.target.value)}
              variant="outlined"
              fullWidth
              required
            />
            <br />
          </Grid>
          <Grid items xs={12}>
            <TextField
              id="outlined-basic"
              label="size"
              value={Ordersize}
              onChange={(size) => setOrdersize(size.target.value)}
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <br />
          <Grid items xs={12}>
            <TextField
              id="outlined-basic"
              label="size"
              value={Fullname}
              onChange={(name) => setFullname(name.target.value)}
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <br />
          <Grid items xs={12}>
            <TextField
              id="outlined-basic"
              label="city"
              value={Usercity}
              onChange={(city) => setUsercity(city.target.value)}
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <br />
          <Grid items xs={12}>
            <TextField
              id="outlined-basic"
              label="price"
              value={Orderprice}
              onChange={(price) => setOrderprice(price.target.value)}
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <br />
          <Grid items xs={12}>
            <TextField
              id="outlined-basic"
              label="status"
              value={Status}
              onChange={(status) => setStatus(status.target.value)}
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <br />
          <Grid items xs={12}>
            <TextField
              id="outlined-basic"
              label="created at"
              value={Createdat}
              onChange={(created) => setCreatedat(created.target.value)}
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <br />
          <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={sendDatatoAPI}
              style={btnstyle}
              fullWidth
            >
              submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Addorders;
