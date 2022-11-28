import React from "react";

import Chatbox from "./ChatBox";
import { Button, Popover, Typography } from "@mui/material";
const useStyles = {
    typography: {
        //padding: theme.spacing(1)
    },
    btn: {
        float: "left",
        padding: "10px 0px",
        backgroundColor: "#fff",
        position: "relative",
        left: "36px",
        top: "-0px"
    }
};

export default function Chatpopup(prop) {
    const classes = useStyles;
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <div>
            <Button
                className={classes.btn}
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
                style={{
                    position: "fixed",
                    bottom: "60px",
                    right: "100px"
                }}
                color="error"
                size="large"
            >
                ❮ Chat with us
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "left"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
            >
                <Typography className={classes.typography}>
                    <Chatbox></Chatbox>
                </Typography>
            </Popover>
        </div>
    );
}
