import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { MobileMenu } from './MobileMenu';
import ProfileMenu from './ProfileMenu.tsx';
import { Search } from './Search';

const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
            MUI
          </Typography>
          <Search />
          <Box sx={{ flexGrow: 1 }} />
          <ProfileMenu />
          <Box display={{ sm: 'none', xs: 'flex' }}>
            <MobileMenu open={open} toggleDrawer={toggleDrawer} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
