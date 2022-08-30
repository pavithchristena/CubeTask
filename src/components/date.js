import { Tab, Tabs, Grid, Slider, Typography, Divider } from "@mui/material";
import React, { useState } from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Box from "@mui/material/Box";
import "./Header.css";

// import "./Header.css";

const Dateprice = () => {
  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [datevalue, setdateValue] = React.useState(
    dayjs("2014-08-18T21:11:54")
  );

  const handleChanges = (newValue) => {
    setdateValue(newValue);
  };
  const [finishdate, setfinishdate] = React.useState(
    dayjs("2014-08-18T21:11:54")
  );
  const handle = (newValue) => {
    setfinishdate(newValue);
  };
  const [range, setRange] = React.useState([0, 20]);

  const handleChangerange = (event, newValue) => {
    setRange(newValue);
  };
  const boxStyle = {
    color: "black",
  };
  const slider = {
    color: "black",
  };

  return (
    <div className="root">
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <div>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="tabs example"
            >
              <Tab label="All" />
              <Tab label="Shipped" />
              <Tab label="Processing" />
              <Tab label="Completed" />
              <Divider />
            </Tabs>
          </div>
        </Grid>
        <Grid className="date" item xs={3}>
          <Grid container justify="space-around">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={1}>
                <DesktopDatePicker
                  label="Start Date"
                  inputFormat="MM/DD/YYYY"
                  value={datevalue}
                  onChange={handleChanges}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Grid className="date" item xs={3}>
          <Grid container justify="space-around">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="Finish Date"
                  inputFormat="MM/DD/YYYY"
                  value={finishdate}
                  onChange={handle}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Grid style={boxStyle} item xs={2}>
          <Typography id="range-slider">Order price range</Typography>
          <Box style={slider} className="box" sx={{ width: 200 }}>
            <Slider
              className="slider"
              getAriaLabel={() => "Temperature range"}
              value={range}
              onChange={handleChangerange}
              valueLabelDisplay="auto"
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
export default Dateprice;
