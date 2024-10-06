import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, IconButton } from '@mui/material';
import React from 'react';
import { DrawerList } from './DrawerList';

interface MobileMenuProps {
    open: boolean;
    toggleDrawer: (open: boolean) => () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, toggleDrawer }) => (
    <>

        <IconButton size="large" aria-label="show more" onClick={toggleDrawer(true)} color="inherit">
            <MenuIcon />
        </IconButton>

        <Drawer open={open} onClose={toggleDrawer(false)}>
            <DrawerList onClose={toggleDrawer(false)} />
        </Drawer>
    </>
);

export { MobileMenu };

