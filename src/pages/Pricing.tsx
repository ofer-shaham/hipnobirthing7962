import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography, Box, Grid, Card, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Check, Heart, Baby, Users, Moon, Sparkles } from 'lucide-react';
import { DebugTooltip } from '../components/Debug/DebugTooltip';

export const Pricing = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he';
  const location = useLocation();

  useEffect(() => {
    // Handle highlighting specific course when coming from documents page
    if (location.hash) {
      const courseId = location.hash.substring(1);
      const element = document.getElementById(courseId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Add temporary highlight effect
        element.style.backgroundColor = 'rgba(212, 165, 165, 0.2)';
        element.style.transition = 'background-color 0.3s ease';
        setTimeout(() => {
          element.style.backgroundColor = '';
        }, 3000);
      }
    }
  }, [location.hash]);

  const courses = [
    {
      id: 'hypnobirthing',
      title: 'הכנה ללידה בשיטת היפנובירת\'ינג',
      duration: '2 שעות',
      sessions: '3 מפגשים',
      price: '2500',
      insurance: 'קיים החזר מקופת החולים',
      icon: <Heart size={48} color="#D4A5A5" />
    },
    {
      id: 'breastfeeding',
      title: 'הדרכת הנקה',
      duration: '1.5 שעות',
      sessions: '1 מפגש',
      price: '400',
      icon: <Baby size={48} color="#D4A5A5" />
    },
    {
      id: 'dunstan',
      title: 'שפת התינוקות דנסטן',
      duration: '2 שעות',
      sessions: '2 מפגשים',
      price: '400',
      icon: <Baby size={48} color="#D4A5A5" />
    },
    {
      id: 'sleep',
      title: 'יועצת שינה בגישת דנסטן',
      duration: '1.5 שעות',
      sessions: '1 מפגש',
      price: '450',
      icon: <Moon size={48} color="#D4A5A5" />
    },
    {
      id: 'massage',
      title: 'עיסוי תינוקות',
      duration: '1.5 שעות',
      sessions: '3 מפגשים',
      price: '400',
      icon: <Users size={48} color="#D4A5A5" />
    },
    {
      id: 'weaning',
      title: 'פרידה מהנקה',
      duration: '1.5 שעות',
      sessions: '1 מפגש',
      price: '350',
      icon: <Sparkles size={48} color="#D4A5A5" />
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }} dir={isRTL ? 'rtl' : 'ltr'}>
      <DebugTooltip jsonPath="pricing.title (i18n)">
        <Typography
          variant="h2"
          color="primary"
          sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold' }}
        >
          {t('pricing.title')}
        </Typography>
      </DebugTooltip>
      
      <DebugTooltip jsonPath="pricing.subtitle (i18n)">
        <Typography
          variant="h5"
          sx={{ textAlign: 'center', mb: 6, color: 'text.secondary' }}
        >
          {t('pricing.subtitle')}
        </Typography>
      </DebugTooltip>

      {/* Table Format */}
      <TableContainer component={Paper} sx={{ mb: 6, borderRadius: '20px', overflow: 'hidden' }}>
        <Table>
          <TableHead sx={{ backgroundColor: 'rgba(212, 165, 165, 0.1)' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem', textAlign: isRTL ? 'right' : 'left' }}>
                שם הקורס
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem', textAlign: 'center' }}>
                שעות המפגש
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem', textAlign: 'center' }}>
                מספר מפגשים
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem', textAlign: 'center' }}>
                עלות כוללת
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course, index) => (
              <TableRow 
                key={index} 
                id={course.id}
                sx={{ '&:hover': { backgroundColor: 'rgba(212, 165, 165, 0.05)' } }}
              >
                <TableCell sx={{ textAlign: isRTL ? 'right' : 'left', fontWeight: 'medium' }}>
                  {course.title}
                </TableCell>
                <TableCell sx={{ textAlign: 'center' }}>
                  {course.duration}
                </TableCell>
                <TableCell sx={{ textAlign: 'center' }}>
                  {course.sessions}
                </TableCell>
                <TableCell sx={{ textAlign: 'center', fontWeight: 'bold', color: 'primary.main' }}>
                  ₪{course.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Cards Format for Mobile */}
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Grid container spacing={3}>
          {courses.map((course, index) => (
            <Grid item xs={12} key={index} id={course.id}>
              <Card elevation={3} sx={{ borderRadius: '16px' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
                    <Box sx={{ minWidth: 'fit-content' }}>
                      {course.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', flex: 1 }}>
                      {course.title}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      {course.duration} • {course.sessions}
                    </Typography>
                    <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                      ₪{course.price}
                    </Typography>
                  </Box>
                  {course.insurance && (
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, gap: 1 }}>
                      <Check size={16} color="#D4A5A5" />
                      <Typography variant="caption" color="primary">
                        {course.insurance}
                      </Typography>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <DebugTooltip jsonPath="pricing.notes.vat (i18n)">
          <Typography variant="body1" color="text.secondary">
            {t('pricing.notes.vat')}
          </Typography>
        </DebugTooltip>
        <Typography variant="body2" color="primary" sx={{ mt: 1, fontWeight: 'medium' }}>
קיים החזר כספי מקופת החולים לקורס הכנה ללידה (עד 75%) ולקורס הדרכת הנקה        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          לפרטים נוספים ולתיאום מפגש, אנא צרו קשר
        </Typography>
      </Box>
    </Container>
  );
};