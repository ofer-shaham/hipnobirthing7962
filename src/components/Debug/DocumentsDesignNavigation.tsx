import React, { useState, useEffect } from 'react';
import { Box, IconButton, Tooltip, Paper } from '@mui/material';
import { 
  FileText, 
  Grid3X3, 
  List, 
  LayoutGrid, 
  Layers, 
  BookOpen,
  Archive,
  Folder
} from 'lucide-react';

interface DocumentsDesignNavigationProps {
  currentDesign: string;
  onDesignChange: (design: string) => void;
}

export const DocumentsDesignNavigation: React.FC<DocumentsDesignNavigationProps> = ({
  currentDesign,
  onDesignChange
}) => {
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    const checkUrl = () => {
      setShowNavigation(window.location.hash.includes('#debug'));
    };
    
    checkUrl();
    window.addEventListener('hashchange', checkUrl);
    
    return () => window.removeEventListener('hashchange', checkUrl);
  }, []);

  if (!showNavigation) return null;

  const designs = [
    { id: 'default', icon: <FileText size={20} />, label: 'Default Grid', color: '#D4A5A5' },
    { id: 'carousel', icon: <Layers size={20} />, label: 'Carousel View', color: '#E6B89C' },
    { id: 'list', icon: <List size={20} />, label: 'List View', color: '#B08A8A' },
    { id: 'cards', icon: <LayoutGrid size={20} />, label: 'Card Layout', color: '#C49999' },
    { id: 'timeline', icon: <BookOpen size={20} />, label: 'Timeline View', color: '#A67C7C' },
    { id: 'masonry', icon: <Grid3X3 size={20} />, label: 'Masonry Grid', color: '#D4B5B5' },
    { id: 'accordion', icon: <Archive size={20} />, label: 'Accordion Style', color: '#E8C4C4' },
    { id: 'folder', icon: <Folder size={20} />, label: 'Folder View', color: '#F2D2D2' }
  ];

  return (
    <Paper
      elevation={8}
      sx={{
        position: 'fixed',
        top: 100,
        right: 20,
        zIndex: 9998,
        borderRadius: '20px',
        p: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(212, 165, 165, 0.2)'
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {designs.map((design) => (
          <Tooltip key={design.id} title={design.label} arrow placement="left">
            <IconButton
              onClick={() => onDesignChange(design.id)}
              sx={{
                width: 44,
                height: 44,
                backgroundColor: currentDesign === design.id ? design.color : 'transparent',
                color: currentDesign === design.id ? 'white' : design.color,
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