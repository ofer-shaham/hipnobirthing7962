import React from 'react';
import { Container, Typography, Box, Button, Grid, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Heart, Baby, Moon, Users, Sparkles } from 'lucide-react';
import { DebugTooltip } from '../components/Debug/DebugTooltip';
import { HomeDesignNavigation } from '../components/Debug/HomeDesignNavigation';

export const Home = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he';
  const { variant } = useParams();

  const getHeroDesign = () => {
    switch (variant) {
      case '1':
        return {
          background: 'linear-gradient(135deg, rgba(212, 165, 165, 0.9) 0%, rgba(230, 184, 156, 0.9) 100%)',
          textColor: 'white',
          overlay: true
        };
      case '2':
        return {
          background: 'rgba(255, 255, 255, 0.95)',
          textColor: '#4A4A4A',
          overlay: false
        };
      case '3':
        return {
          background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.7) 0%, rgba(212, 165, 165, 0.8) 100%)',
          textColor: 'white',
          overlay: true
        };
      case '4':
        return {
          background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.8) 0%, rgba(255, 165, 0, 0.8) 100%)',
          textColor: 'white',
          overlay: true
        };
      case '5':
        return {
          background: 'linear-gradient(135deg, rgba(65, 105, 225, 0.8) 0%, rgba(25, 25, 112, 0.8) 100%)',
          textColor: 'white',
          overlay: true
        };
      case '6':
        return {
          background: 'linear-gradient(135deg, rgba(255, 105, 180, 0.8) 0%, rgba(255, 20, 147, 0.8) 100%)',
          textColor: 'white',
          overlay: true
        };
      case '7':
        return {
          background: 'linear-gradient(135deg, rgba(147, 112, 219, 0.8) 0%, rgba(75, 0, 130, 0.8) 100%)',
          textColor: 'white',
          overlay: true
        };
      case '8':
        return {
          background: 'linear-gradient(135deg, rgba(50, 205, 50, 0.8) 0%, rgba(34, 139, 34, 0.8) 100%)',
          textColor: 'white',
          overlay: true
        };
      case '9':
        return {
          background: 'linear-gradient(135deg, rgba(255, 69, 0, 0.8) 0%, rgba(255, 140, 0, 0.8) 100%)',
          textColor: 'white',
          overlay: true
        };
      default:
        return {
          background: 'rgba(0, 0, 0, 0.4)',
          textColor: 'white',
          overlay: false
        };
    }
  };

  const heroDesign = getHeroDesign();

  return (
    <Box dir={isRTL ? 'rtl' : 'ltr'}>
      <HomeDesignNavigation />
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url("https://raw.githubusercontent.com/ofer-shaham/hypnobirthing4/refs/heads/main/src/img/logo2.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: heroDesign.background,
            zIndex: 1
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: isRTL ? 'right' : 'left' }}>
            <DebugTooltip jsonPath="animation_text.json > introduction.name">
              <Typography
                variant="h1"
                sx={{ color: heroDesign.textColor }}
                sx={{
                  color: heroDesign.textColor,
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 'bold',
                  textShadow: heroDesign.textColor === 'white' ? '2px 2px 4px rgba(0,0,0,0.8)' : 'none',
                  mb: 2
                }}
              >
                מאריאנה שחם
              </Typography>
            </DebugTooltip>
            
            <DebugTooltip jsonPath="home.subtitle (i18n)">
              <Typography
                variant="h4"
                sx={{ 
                  color: heroDesign.textColor,
                  textShadow: heroDesign.textColor === 'white' ? '2px 2px 4px rgba(0,0,0,0.9)' : 'none',
                  fontWeight: 'bold'
                }}
                mb={4}
                maxWidth="800px"
                lineHeight={1.4}
              >
                לידה מנצחת - מרגע ההכנה עד החיבוק הראשון ואחריו, יד ביד איתך כל הדרך
              </Typography>
            </DebugTooltip>

            <DebugTooltip jsonPath="home.exploreButton (i18n)">
              <Button
                variant="contained"
                size="large"
                color="primary"
                href="/courses"
                sx={{ 
                  fontSize: '1.2rem', 
                  py: 1.5, 
                  px: 4,
                  borderRadius: '25px',
                  boxShadow: '0 4px 15px rgba(212, 165, 165, 0.3)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(212, 165, 165, 0.4)',
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                {t('home.exploreButton')}
              </Button>
            </DebugTooltip>
          </Box>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: 8, backgroundColor: 'rgba(212, 165, 165, 0.05)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <DebugTooltip jsonPath="animation_text.json > services.title">
              <Typography variant="h3" color="primary" sx={{ mb: 4, fontWeight: 'bold' }}>
                כל המקצועיות במקום אחד
              </Typography>
            </DebugTooltip>
            
            <DebugTooltip jsonPath="animation_text.json > services.offerings">
              <Typography variant="h5" color="text.primary" sx={{ fontWeight: 500 }}>
                הכנה ללידה בשיטת היפנובירת'ינג • הדרכת הנקה • הדרכת פרידה מהנקה • יעוץ שפת התינוקות דנסטן • ייעוץ שינה בגישת דנסטן • עיסוי תינוקות
              </Typography>
            </DebugTooltip>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }
              }}
            >
              <Heart size={48} color="#D4A5A5" />
              <DebugTooltip jsonPath="home.features.hypnobirthing.title (i18n)">
                <Typography variant="h5" sx={{ mt: 2, mb: 1, color: 'primary.main' }}>
                  {t('home.features.hypnobirthing.title')}
                </Typography>
              </DebugTooltip>
              <DebugTooltip jsonPath="home.features.hypnobirthing.description (i18n)">
                <Typography>
                  {t('home.features.hypnobirthing.description')}
                </Typography>
              </DebugTooltip>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }
              }}
            >
              <Baby size={48} color="#D4A5A5" />
              <DebugTooltip jsonPath="home.features.breastfeeding.title (i18n)">
                <Typography variant="h5" sx={{ mt: 2, mb: 1, color: 'primary.main' }}>
                  {t('home.features.breastfeeding.title')}
                </Typography>
              </DebugTooltip>
              <DebugTooltip jsonPath="home.features.breastfeeding.description (i18n)">
                <Typography>
                  {t('home.features.breastfeeding.description')}
                </Typography>
              </DebugTooltip>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }
              }}
            >
              <Sparkles size={48} color="#D4A5A5" />
              <DebugTooltip jsonPath="home.features.weaning.title (i18n)">
                <Typography variant="h5" sx={{ mt: 2, mb: 1, color: 'primary.main' }}>
                  {t('home.features.weaning.title')}
                </Typography>
              </DebugTooltip>
              <DebugTooltip jsonPath="home.features.weaning.description (i18n)">
                <Typography>
                  {t('home.features.weaning.description')}
                </Typography>
              </DebugTooltip>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }
              }}
            >
              <Baby size={48} color="#D4A5A5" />
              <DebugTooltip jsonPath="home.features.dunstan.title (i18n)">
                <Typography variant="h5" sx={{ mt: 2, mb: 1, color: 'primary.main' }}>
                  {t('home.features.dunstan.title')}
                </Typography>
              </DebugTooltip>
              <DebugTooltip jsonPath="home.features.dunstan.description (i18n)">
                <Typography>
                  {t('home.features.dunstan.description')}
                </Typography>
              </DebugTooltip>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }
              }}
            >
              <Moon size={48} color="#D4A5A5" />
              <DebugTooltip jsonPath="home.features.sleep.title (i18n)">
                <Typography variant="h5" sx={{ mt: 2, mb: 1, color: 'primary.main' }}>
                  {t('home.features.sleep.title')}
                </Typography>
              </DebugTooltip>
              <DebugTooltip jsonPath="home.features.sleep.description (i18n)">
                <Typography>
                  {t('home.features.sleep.description')}
                </Typography>
              </DebugTooltip>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }
              }}
            >
              <Users size={48} color="#D4A5A5" />
              <DebugTooltip jsonPath="home.features.massage.title (i18n)">
                <Typography variant="h5" sx={{ mt: 2, mb: 1, color: 'primary.main' }}>
                  {t('home.features.massage.title')}
                </Typography>
              </DebugTooltip>
              <DebugTooltip jsonPath="home.features.massage.description (i18n)">
                <Typography>
                  {t('home.features.massage.description')}
                </Typography>
              </DebugTooltip>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};