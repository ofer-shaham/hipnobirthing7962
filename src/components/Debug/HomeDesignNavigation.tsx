import React, { useState, useEffect } from 'react';
import { Box, IconButton, Tooltip, Paper } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Home, 
  Palette, 
  Brush, 
  Sparkles, 
  Sun, 
  Moon, 
  Heart, 
  Star, 
  Flower, 
  Zap 
} from 'lucide-react';

export const HomeDesignNavigation: React.FC = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkUrl = () => {
      setShowNavigation(
        window.location.hash.includes('#debug') && 
        (location.pathname === '/home' || location.pathname === '/' || location.pathname.startsWith('/home/'))
      );
    };
    
    checkUrl();
    window.addEventListener('hashchange', checkUrl);
    
    return () => window.removeEventListener('hashchange', checkUrl);
  }, [location.pathname]);

  if (!showNavigation) return null;

  const designs = [
    { id: '', icon: <Home size={20} />, label: 'Default Design', color: '#D4A5A5' },
    { id: '1', icon: <Palette size={20} />, label: 'Gradient Overlay', color: '#E6B89C' },
    { id: '2', icon: <Brush size={20} />, label: 'Clean White', color: '#F5F5F5' },
    { id: '3', icon: <Sparkles size={20} />, label: 'Dark Gradient', color: '#8B4513' },
    { id: '4', icon: <Sun size={20} />, label: 'Sunny Design', color: '#FFD700' },
    { id: '5', icon: <Moon size={20} />, label: 'Night Mode', color: '#4169E1' },
    { id: '6', icon: <Heart size={20} />, label: 'Romantic', color: '#FF69B4' },
    { id: '7', icon: <Star size={20} />, label: 'Stellar', color: '#9370DB' },
    { id: '8', icon: <Flower size={20} />, label: 'Floral', color: '#32CD32' },
    { id: '9', icon: <Zap size={20} />, label: 'Electric', color: '#FF4500' }
  ];

  const currentVariant = location.pathname.split('/')[2] || '';

  const handleDesignChange = (designId: string) => {
    const path = designId ? `/home/${designId}` : '/home';
    navigate(path + window.location.hash);
  };

  return (
    <Paper
      elevation={8}
      sx={{
        position: 'fixed',
        bottom: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9998,
        borderRadius: '25px',
        p: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(212, 165, 165, 0.2)'
      }}
    >
      <Box sx={{ display: 'flex', gap: 1 }}>
        {designs.map((design) => (
          <Tooltip key={design.id} title={design.label} arrow>
            <IconButton
              onClick={() => handleDesignChange(design.id)}
              sx={{
                width: 44,
                height: 44,
                backgroundColor: currentVariant === design.id ? design.color : 'transparent',
                color: currentVariant === design.id ? 'white' : design.color,
                border: `2px solid ${design.color}`,
                '&:hover': {
                  backgroundColor: design.color,
                  color: 'white',
                  transform: 'scale(1.1)'
                },
                transition: 'all 0.2s ease'
              }}
            >
              {design.icon}
            </IconButton>
          </Tooltip>
        ))}
      </Box>
    </Paper>
  );
};