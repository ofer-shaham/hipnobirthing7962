import React from 'react';
import { Box, Container, Typography, Link, IconButton, useTheme } from '@mui/material';
import { Instagram, Mail, Phone, Facebook, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#D4A5A5',
        color: 'white',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 4
          }}
        >
          <Box>
            <Typography variant="h6" gutterBottom>
              {t('navigation.contact')}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton color="inherit" component={Link} href="https://www.instagram.com/mariana.shaham/">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" component={Link} href="https://www.facebook.com/mary.shaham">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" component={Link} href="https://wa.me/972526205052">
                <MessageCircle />
              </IconButton>
              <IconButton color="inherit" component={Link} href="mailto:maryza1982@gmail.com">
                <Mail />
              </IconButton>
              <IconButton color="inherit" component={Link} href="tel:0526205052">
                <Phone />
              </IconButton>
            </Box>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2">
              © {new Date().getFullYear()} {t('footer.rights')}
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Link href="/privacy" color="inherit" sx={{ mx: 1 }}>
                מדיניות פרטיות ותנאי שירות
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};