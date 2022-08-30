import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { blue } from "@mui/material/colors";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 0,
    border: `2px solid ${blue}`,
    padding: "0 4px",
  },
}));

export default function Badges() {
  return (
    <div>
      5jjjj
      <StyledBadge badgeContent={Node} color="info" />
      yujj
    </div>
  );
}
