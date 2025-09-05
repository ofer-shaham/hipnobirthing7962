import React, { useState, useEffect } from 'react';
import { Tooltip, IconButton } from '@mui/material';
import { Bug } from 'lucide-react';

// Global debug state
let globalDebugMode = false;
const debugListeners: Array<(mode: boolean) => void> = [];

interface DebugTooltipProps {
  jsonPath: string;
  children: React.ReactNode;
}

export const DebugTooltip: React.FC<DebugTooltipProps> = ({ jsonPath, children }) => {
  const [debugMode, setDebugMode] = useState(globalDebugMode);

  useEffect(() => {
    const listener = (mode: boolean) => setDebugMode(mode);
    debugListeners.push(listener);
    
    return () => {
      const index = debugListeners.indexOf(listener);
      if (index > -1) debugListeners.splice(index, 1);
    };
  }, []);

  if (!debugMode) {
    return <>{children}</>;
  }

  return (
    <Tooltip title={jsonPath} arrow placement="top">
      <span 
        style={{ 
          position: 'relative', 
          border: '1px dashed #D4A5A5', 
          padding: '2px',
          display: 'inline-block',
          borderRadius: '3px'
        }}
      >
        {children}
      </span>
    </Tooltip>
  );
};

export const DebugToggle: React.FC = () => {
  const [debugMode, setDebugMode] = useState(globalDebugMode);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkUrl = () => {
      setShowButton(window.location.hash.includes('#debug'));
    };
    
    checkUrl();
    window.addEventListener('hashchange', checkUrl);
    
    return () => window.removeEventListener('hashchange', checkUrl);
  }, []);

  const toggleDebug = () => {
    globalDebugMode = !globalDebugMode;
    setDebugMode(globalDebugMode);
    
    // Notify all debug tooltips
    debugListeners.forEach(listener => listener(globalDebugMode));
    
    // Store in localStorage for persistence
    localStorage.setItem('debugMode', globalDebugMode.toString());
  };

  useEffect(() => {
    const stored = localStorage.getItem('debugMode');
    if (stored) {
      globalDebugMode = stored === 'true';
      setDebugMode(globalDebugMode);
      debugListeners.forEach(listener => listener(globalDebugMode));
    }
  }, []);

  if (!showButton) return null;

  return (
    <Tooltip title="Toggle Debug Mode (Ctrl+D)" arrow>
      <IconButton
        onClick={toggleDebug}
        color={debugMode ? 'primary' : 'default'}
        size="small"
        sx={{ 
          position: 'fixed', 
          top: 10, 
          right: 10, 
          zIndex: 9999,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 1)'
          }
        }}
      >
        <Bug size={20} />
      </IconButton>
    </Tooltip>
  );
};