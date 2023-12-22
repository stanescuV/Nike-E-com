import "./user.css"
import React from 'react'
import Popover from '@mui/material/Popover';
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import SignIn from "../sign/SignIn";


export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
        <Avatar onClick={handleClick} className="avatar" sx={{ margin: "5px", cursor: "pointer" }}></Avatar>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Link to={"/sign-up"}> Create an Account</Link>
        <br/>
        <Link to={"/sign-in"}>Log in </Link>
        <br/>
        <Link to={"/orders"}>My Orders</Link>
      </Popover>
    </div>
  );
}
