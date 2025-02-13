import React, { useState, ReactNode } from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
  ListItemButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import FeedIcon from '@mui/icons-material/Feed';
import ContactMailIcon from '@mui/icons-material/ContactMail';

interface MobileNavProps {
  children?: ReactNode;
}

const MobileNav: React.FC<MobileNavProps> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position='fixed' sx={{ backgroundColor: 'grey.800' }}>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: 'block', xs: 'block', lg: 'block', xl: 'block' },
            }}
          >
            <MenuIcon sx={{ color: 'white' }} />
          </IconButton>

          <Typography variant='h6' noWrap>
            Stark Studios
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'block', lg: 'block', xl: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
            backgroundColor: 'grey.800',
          },
        }}
      >
        <Toolbar>
          <List>
            <Link
              to='/'
              onClick={() => window.scrollTo(0, 0)}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <ListItemButton onClick={handleDrawerToggle}>
                <ListItemIcon>
                  <HomeIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary='Home' sx={{ color: 'white' }} />
              </ListItemButton>
            </Link>
            <Link
              to='/services'
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <ListItemButton onClick={handleDrawerToggle}>
                <ListItemIcon>
                  <FeedIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary='Services' sx={{ color: 'white' }} />
              </ListItemButton>
            </Link>
            <Link
              to='/photos'
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <ListItemButton onClick={handleDrawerToggle}>
                <ListItemIcon>
                  <CameraEnhanceIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary='Photos' sx={{ color: 'white' }} />
              </ListItemButton>
            </Link>
            <Link
              to='/videos'
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <ListItemButton onClick={handleDrawerToggle}>
                <ListItemIcon>
                  <VideoCameraBackIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary='Videos' sx={{ color: 'white' }} />
              </ListItemButton>
            </Link>
            <Link
              to='/contact'
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <ListItemButton onClick={handleDrawerToggle}>
                <ListItemIcon>
                  <ContactMailIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary='Contact' sx={{ color: 'white' }} />
              </ListItemButton>
            </Link>
          </List>
        </Toolbar>
      </Drawer>

      <div
        style={{
          marginLeft: mobileOpen ? 240 : 0,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default MobileNav;
