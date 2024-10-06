import * as React from 'react';
import { Box, Avatar, IconButton, Menu, MenuItem, Tooltip, Divider, ListItemIcon, Button, Badge } from '@mui/material';
import { PersonAdd, Settings, Logout } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { Link } from 'react-router-dom';
const ProfileMenu: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <Box display={{ xs: 'none', sm: 'flex' }} alignItems="center">
                <Link to="/">
                    <Button
                        sx={{ margin: '10px' }}
                        color="white"
                        startIcon={<HomeIcon />}
                    >
                        Home
                    </Button>
                </Link>

                <Link to="/cart">
                    <Button
                        sx={{ margin: '10px' }}
                        color="white"
                        startIcon={<ShoppingCartIcon />}
                    >
                        Cart
                    </Button></Link>
                <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                </Badge>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                sx={{
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                    <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Avatar /> My account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon><FavoriteBorderIcon /></ListItemIcon> Wishlist
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon><ViewInArIcon /></ListItemIcon> Orders
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
};

export default ProfileMenu;
