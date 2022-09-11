import React, { useState } from "react";
import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import Typography from '@mui/material/Typography';

const NavBar = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar style={{ backgroundColor: '#fff' }}>
            <Container>
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1 }}>
                        <img src='https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg' height={'40'} width='40' />
                    </Box>
                    <Box sx={{ maxWidth: { xs: 320, sm: 600 }, bgcolor: 'background.paper' }}>
                        <Tabs className='menu-items'
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons={false}
                            aria-label="scrollable prevent tabs example"
                        >
                            <Tab label="My Voot" />
                            <Tab label="Premium" />
                            <Tab label="Sports" />
                            <Tab label="Shows" />
                            <Tab label="Movies" />
                            <Tab label="Channels" />
                        </Tabs>
                    </Box>
                    <Avatar alt="user-image" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg" onClick={handleClick} />
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </Toolbar>

            </Container>
        </AppBar>
    )
}

export default NavBar;