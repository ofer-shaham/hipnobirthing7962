import React from 'react';
import { Container, Typography, Box, Grid, Avatar, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Award, Heart, Users, Sparkles } from 'lucide-react';
import { DebugTooltip } from '../components/Debug/DebugTooltip';

export const About = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he';

  return (
    <Container maxWidth="lg" sx={{ py: 8 }} dir={isRTL ? 'rtl' : 'ltr'}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative', textAlign: 'center' }}>
            <Avatar
              src="https://raw.githubusercontent.com/ofer-shaham/hypnobirthing4/refs/heads/main/src/img/profile.jpg"
              sx={{
                width: { xs: 250, md: 350 },
                height: { xs: 250, md: 350 },
                mx: 'auto',
                mb: 3,
                border: '5px solid',
                borderColor: 'primary.main',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.3)'
                }
              }}
            />
          </Box>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: isRTL ? 'right' : 'left' }}>
            <DebugTooltip jsonPath="about.greeting (i18n)">
              <Typography variant="h2" color="primary" sx={{ mb: 3, fontWeight: 600, fontSize: { xs: '2rem', md: '2.5rem' } }}>
                {t('about.greeting')}
              </Typography>
            </DebugTooltip>

            <DebugTooltip jsonPath="about.journey.firstBirth (i18n)">
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7, fontSize: '1.05rem', fontWeight: 400 }}>
                {t('about.journey.firstBirth')}
              </Typography>
            </DebugTooltip>

            <DebugTooltip jsonPath="about.journey.realization (i18n)">
              <Typography variant="h5" color="primary" sx={{ mb: 3, fontWeight: 500, fontStyle: 'italic', fontSize: '1.2rem' }}>
                {t('about.journey.realization')}
              </Typography>
            </DebugTooltip>

            <DebugTooltip jsonPath="about.journey.secondBirth (i18n)">
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7, fontSize: '1.05rem', fontWeight: 400 }}>
                {t('about.journey.secondBirth')}
              </Typography>
            </DebugTooltip>

            <DebugTooltip jsonPath="about.journey.laterBirths (i18n)">
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7, fontSize: '1.05rem', fontWeight: 400 }}>
                {t('about.journey.laterBirths')}
              </Typography>
            </DebugTooltip>

            <DebugTooltip jsonPath="about.journey.mission (i18n)">
              <Typography variant="body1" color="primary" sx={{ mb: 3, fontWeight: 500, lineHeight: 1.7, fontSize: '1.05rem' }}>
                {t('about.journey.mission')}
              </Typography>
            </DebugTooltip>

            <DebugTooltip jsonPath="about.journey.learning (i18n)">
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7, fontSize: '1.05rem', fontWeight: 400 }}>
                {t('about.journey.learning')}
              </Typography>
            </DebugTooltip>
          </Box>
        </Grid>
      </Grid>



      {/* Personal Info */}
      <Box sx={{ mt: 8 }}>
        <Paper elevation={2} sx={{ p: 4, borderRadius: '16px' }}>
          <DebugTooltip jsonPath="about.personal.intro (i18n)">
            <Typography variant="h6" color="text.primary" sx={{ mb: 3, textAlign: isRTL ? 'right' : 'left', lineHeight: 1.6, fontSize: '1.1rem', fontWeight: 500 }}>
              {t('about.personal.intro')}
            </Typography>
          </DebugTooltip>

          <DebugTooltip jsonPath="about.personal.experience (i18n)">
            <Typography variant="body1" sx={{ mb: 3, textAlign: isRTL ? 'right' : 'left', lineHeight: 1.6, fontSize: '1.05rem', fontWeight: 400 }}>
              {t('about.personal.experience')}
            </Typography>
          </DebugTooltip>

          <DebugTooltip jsonPath="about.personal.message (i18n)">
            <Typography variant="h6" color="primary" sx={{ textAlign: 'center', fontWeight: 500, fontStyle: 'italic', fontSize: '1.15rem' }}>
              {t('about.personal.message')}
            </Typography>
          </DebugTooltip>
        </Paper>
      </Box>
    </Container>
  );
};