import styled from "@emotion/styled";
import { Pets } from "@mui/icons-material";
import { AppBar, Avatar, InputBase, Toolbar, Typography } from "@mui/material";
import { Box, flexbox } from "@mui/system";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { useState } from "react";


const Navbar = () => {
    const [opening, setOpening] = useState(false)


    const StyledToolbaring = styled(Toolbar)({
        justifyContent: "space-between"
    })

    const Search = styled("div")({
        backgroundColor: "white",
        padding: "0 10px",
        borderRadius: 10,
        width: "30%"

    })

    const Icons = styled(Box)(({ theme }) => ({
        display: 'none',
        alignItems: "center",
        gap: "10px",
        [theme.breakpoints.up("sm")]: { display: "flex" },
        '&:hover': {
            cursor: 'pointer',
        },
    }))

    const UserBox = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        gap: "10px",
        [theme.breakpoints.up("sm")]: { display: "none" }
    }))


    return (
        <AppBar position="stick">
            <StyledToolbaring>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
                    Navbar
                </Typography>
                <Pets sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder="search..." /></Search>
                <Icons >
                    <Badge badgeContent={3} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar sx={{ width: 30, height: 30 }} src={'asseting/llama.jpg'} onClick={() => { setOpening(true) }} />

                </Icons>
                <UserBox>
                    <Avatar sx={{ width: 30, height: 30 }} src={'asseting/llama.jpg'} />
                    <Typography>LLAMA</Typography>
                </UserBox>
            </StyledToolbaring>
            <Menu onClose={() => { setOpening(false) }} open={opening} anchorOrigin={{ vertical: "top", horizontal: "right" }} transformOrigin={{ vertical: "top", horizontal: "right" }}>
                <MenuItem>Profiling</MenuItem>
                <MenuItem>My accounting</MenuItem>
                <MenuItem>Logouting</MenuItem>
            </Menu>
        </AppBar>
    )
}
export default Navbar;