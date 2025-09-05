import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  IconButton, 
  Menu, 
  MenuItem,
  useTheme,
  Box
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Sun, Moon, Menu as MenuIcon, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const location = useLocation();
  const isRTL = i18n.language === 'he';
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [langAnchorEl, setLangAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLangMenu = (event: React.MouseEvent<HTMLElement>) => {
    setLangAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLangClose = () => {
    setLangAnchorEl(null);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    handleLangClose();
    document.dir = lng === 'he' ? 'rtl' : 'ltr';
  };

  const isActive = (path: string) => {
    return location.pathname === path || (path === '/home' && location.pathname === '/');
  };

  const menuItems = [
    { path: '/home', label: t('navigation.home') },
    { path: '/about', label: t('navigation.about') },
    { path: '/courses', label: t('navigation.courses') },
    { path: '/pricing', label: t('navigation.pricing') },
    { path: '/documents', label: t('navigation.documents') },
    { path: '/contact', label: t('navigation.contact') }
  ];

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { sm: 'none' } }}
          onClick={handleMenu}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1, gap: 1 }}>
          {menuItems.map((item) => (
            <Button
              key={item.path}
              color="inherit"
              component={Link}
              to={item.path}
              sx={{
                position: 'relative',
                borderRadius: '20px',
                px: 3,
                py: 1,
                mr: isRTL ? 0 : 1,
                ml: isRTL ? 1 : 0,
                backgroundColor: isActive(item.path) ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                fontWeight: isActive(item.path) ? 'bold' : 'normal',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                },
                '&::after': isActive(item.path) ? {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60%',
                  height: '3px',
                  backgroundColor: 'white',
                  borderRadius: '2px'
                } : {}
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: 'flex', gap: 1, ml: isRTL ? 0 : 'auto', mr: isRTL ? 'auto' : 0 }}>
          <IconButton 
            color="inherit" 
            onClick={handleLangMenu}
            sx={{
              '&:hover': {
                transform: 'scale(1.1)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            <Globe />
          </IconButton>

          <IconButton 
            color="inherit" 
            onClick={toggleTheme}
            sx={{
              '&:hover': {
                transform: 'scale(1.1)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            {theme.palette.mode === 'dark' ? <Sun /> : <Moon />}
          </IconButton>
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {menuItems.map((item) => (
            <MenuItem
              key={item.path}
              component={Link}
              to={item.path}
              onClick={handleClose}
              sx={{
                fontWeight: isActive(item.path) ? 'bold' : 'normal',
                backgroundColor: isActive(item.path) ? 'rgba(212, 165, 165, 0.1)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(212, 165, 165, 0.2)'
                }
              }}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>

        <Menu
          anchorEl={langAnchorEl}
          open={Boolean(langAnchorEl)}
          onClose={handleLangClose}
        >
          <MenuItem onClick={() => changeLanguage('he')}>עברית</MenuItem>
          <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
          <MenuItem onClick={() => changeLanguage('ru')}>Русский</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};