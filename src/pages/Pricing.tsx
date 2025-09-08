import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography, Box, Grid, Card, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Check, Heart, Baby, Users, Moon, Sparkles, Info } from 'lucide-react';
import { DebugTooltip } from '../components/Debug/DebugTooltip';
import useMediaQuery from '@mui/material/useMediaQuery';

export const Pricing = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he';
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    if (location.hash) {
      const courseId = location.hash.substring(1);
      const element = document.getElementById(courseId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
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
      sessions: '2 מפגשים',
      price: '2500',
      insurance: true,
      groupMeeting: false,
      icon: <Heart size={48} color="#D4A5A5" />
    },
    {
      id: 'prebreastfeeding',
      title: 'הכנה להנקה',
      duration: '1.5 שעות',
      sessions: '1 מפגש',
      price: '300',
      insurance: false,
      groupMeeting: true,
      icon: <Baby size={48} color="#D4A5A5" />
    },
    {
      id: 'breastfeeding',
      title: 'הדרכת הנקה',
      duration: '1.5 שעות',
      sessions: '1 מפגש',
      price: '400',
      insurance: false,
      groupMeeting: false,
      icon: <Baby size={48} color="#D4A5A5" />
    },
    {
      id: 'dunstan',
      title: 'שפת התינוקות דנסטן',
      duration: '2 שעות',
      sessions: '2 מפגשים',
      price: '400',
      insurance: false,
      groupMeeting: false,
      icon: <Baby size={48} color="#D4A5A5" />
    },
    {
      id: 'sleep',
      title: 'ייעוץ שינה בגישת דנסטן',
      duration: '1.5 שעות',
      sessions: '1 מפגש',
      price: '450',
      insurance: true,
      groupMeeting: false,
      icon: <Moon size={48} color="#D4A5A5" />
    },
    {
      id: 'massage',
      title: 'עיסוי תינוקות',
      duration: '1.5 שעות',
      sessions: '3 מפגשים',
      price: '300',
      insurance: false,
      groupMeeting: true,
      icon: <Users size={48} color="#D4A5A5" />
    },
    {
      id: 'weaning',
      title: 'פרידה מהנקה',
      duration: '1.5 שעות',
      sessions: '1 מפגש',
      price: '350',
      insurance: false,
      groupMeeting: false,
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
          sx={{ textAlign: 'center', mb: 2, color: 'text.secondary' }}
        >
          {t('pricing.subtitle')}
        </Typography>
      </DebugTooltip>
      <Typography variant="body2" color="primary" sx={{ mt: 1, mb: 4, fontWeight: 'medium', textAlign: 'center' }}>
        קיים החזר כספי מקופת החולים לקורס הכנה ללידה (עד 75%) ולקורס ייעוץ שינה
      </Typography>

      {/* Table Format */}
      {!isMobile && (
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
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem', textAlign: 'center' }}>
                  מפגש קבוצתי
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem', textAlign: 'center' }}>
                  החזר מקופת החולים
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
                  <TableCell sx={{ textAlign: 'center', fontWeight: 'medium' }}>
                    {course.groupMeeting ? 'כן' : '—'}
                  </TableCell>
                  <TableCell sx={{ textAlign: 'center', fontWeight: 'medium' }}>
                    {course.insurance ? 'כן' : '—'}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Minimalistic Table for Mobile */}
      {isMobile && (
        <Box sx={{ width: '100%', overflowX: 'auto' }}>
          <TableContainer
            component={Paper}
            sx={{
              mb: 6,
              borderRadius: '20px',
              minWidth: 700,
              width: 'max-content',
            }}
          >
            <Table>
              <TableHead sx={{ backgroundColor: 'rgba(212, 165, 165, 0.1)' }}>
                <TableRow>
                  <TableCell
                    sx={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      whiteSpace: 'normal',
                      overflowWrap: 'break-word',
                      wordBreak: 'keep-all',
                      px: 1,
                    }}
                  >
                    שעות המפגש
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      whiteSpace: 'normal',
                      overflowWrap: 'break-word',
                      wordBreak: 'keep-all',
                      px: 1,
                    }}
                  >
                    מספר מפגשים
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      whiteSpace: 'normal',
                      overflowWrap: 'break-word',
                      wordBreak: 'keep-all',
                      px: 1,
                    }}
                  >
                    עלות כוללת
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      whiteSpace: 'normal',
                      overflowWrap: 'break-word',
                      wordBreak: 'keep-all',
                      px: 1,
                    }}
                  >
                    מפגש קבוצתי
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      whiteSpace: 'normal',
                      overflowWrap: 'break-word',
                      wordBreak: 'keep-all',
                      px: 1,
                    }}
                  >
                    החזר מקופת החולים
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
                    <TableCell sx={{ textAlign: 'center' }}>
                      {parseFloat(course.duration)}
                    </TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>
                      {parseInt(course.sessions)}
                    </TableCell>
                    <TableCell sx={{ textAlign: 'center', fontWeight: 'bold', color: 'primary.main' }}>
                      {course.price}
                    </TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>
                      {course.groupMeeting ? 'כן' : '—'}
                    </TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>
                      {course.insurance ? 'כן' : '—'}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}

      {/* Cards Format for Mobile */}
      {/* <Box sx={{ display: { xs: 'block', md: 'none' } }}>
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
                      {parseFloat(course.duration)} • {parseInt(course.sessions)}
                    </Typography>
                    <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                      ₪{course.price}
                    </Typography>
                  </Box>
                  {(course.insurance || course.groupMeeting) && (
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, gap: 2 }}>
                      {course.insurance && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Check size={16} color="#D4A5A5" />
                          <Typography variant="caption" color="primary">
                            החזר מקופת החולים
                          </Typography>
                        </Box>
                      )}
                      {course.groupMeeting && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Check size={16} color="#D4A5A5" />
                          <Typography variant="caption" color="primary">
                            מפגש קבוצתי
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box> */}


    </Container>
  );
};
