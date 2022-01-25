import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <h2>I am header</h2>
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>

            <img
                className="header__logo"
                src="https://cdn-icons-png.flaticon.com/512/2111/2111653.png"
                alt=""
            />
        </div>
    );
}

export default Header;
