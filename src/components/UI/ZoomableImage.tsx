import React, { useState } from 'react';
import { Box, Modal, IconButton } from '@mui/material';
import { X, ZoomIn } from 'lucide-react';

interface ZoomableImageProps {
  src: string;
  alt: string;
  sx?: any;
}

export const ZoomableImage: React.FC<ZoomableImageProps> = ({ src, alt, sx = {} }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          cursor: 'zoom-in',
          borderRadius: '20px',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 15px 40px rgba(0,0,0,0.2)'
          },
          '&:hover .zoom-overlay': {
            opacity: 1
          },
          ...sx
        }}
        onClick={handleOpen}
      >
        <img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block'
          }}
        />
        <Box
          className="zoom-overlay"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            transition: 'opacity 0.3s ease'
          }}
        >
          <ZoomIn size={48} color="white" />
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2
        }}
      >
        <Box
          sx={{
            position: 'relative',
            maxWidth: '95vw',
            maxHeight: '95vh',
            outline: 'none'
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: -50,
              right: -50,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              color: 'black',
              '&:hover': {
                backgroundColor: 'white'
              },
              zIndex: 1
            }}
          >
            <X />
          </IconButton>
          <img
            src={src}
            alt={alt}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              borderRadius: '10px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
            }}
          />
        </Box>
      </Modal>
    </>
  );
};