import React, { useState, ReactNode } from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import FeedIcon from '@mui/icons-material/Feed';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import StarkLogo from '../assets/STARK-STUDIOS-LOGO-(TEAL).png';

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
      <AppBar position='fixed' sx={{ backgroundColor: '#E7D4AB' }}>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: {
                sm: 'block',
                xs: 'block',
                lg: 'block',
                xl: 'block',
                zIndex: 2,
              },
            }}
          >
            <MenuIcon sx={{ color: '#008080', zIndex: 10 }} />
          </IconButton>

          {/* <Typography variant='h6' noWrap sx={{ color: '#008080'}}>
            Stark Studios
          </Typography> */}
          <img
            src={StarkLogo}
            style={{ width: '250px', position: 'fixed', top: -97, zIndex: 0 }}
          />
          {/* <IconButton></IconButton> */}
          {/* <Box sx={{ width: '10%'}}>
          <img src={StarkLogo} style={{ width:'250px'}}/>
          </Box> */}
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
            backgroundColor: '#E7D4AB',
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
                  <HomeIcon sx={{ color: '#008080' }} />
                </ListItemIcon>
                <ListItemText primary='Home' sx={{ color: '#008080' }} />
              </ListItemButton>
            </Link>
            <Link
              to='/services'
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <ListItemButton onClick={handleDrawerToggle}>
                <ListItemIcon>
                  <FeedIcon sx={{ color: '#008080' }} />
                </ListItemIcon>
                <ListItemText primary='Services' sx={{ color: '#008080' }} />
              </ListItemButton>
            </Link>
            <Link
              to='/photos'
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <ListItemButton onClick={handleDrawerToggle}>
                <ListItemIcon>
                  <CameraEnhanceIcon sx={{ color: '#008080' }} />
                </ListItemIcon>
                <ListItemText primary='Photos' sx={{ color: '#008080' }} />
              </ListItemButton>
            </Link>
            <Link
              to='/videos'
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <ListItemButton onClick={handleDrawerToggle}>
                <ListItemIcon>
                  <VideoCameraBackIcon sx={{ color: '#008080' }} />
                </ListItemIcon>
                <ListItemText primary='Videos' sx={{ color: '#008080' }} />
              </ListItemButton>
            </Link>
            <Link
              to='/contact'
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <ListItemButton onClick={handleDrawerToggle}>
                <ListItemIcon>
                  <ContactMailIcon sx={{ color: '#008080' }} />
                </ListItemIcon>
                <ListItemText primary='Contact' sx={{ color: '#008080' }} />
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
