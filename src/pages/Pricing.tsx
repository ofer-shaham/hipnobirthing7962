import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Pricing = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he';
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.hash]);

  // Only presentation: wrap text at word boundaries on mobile, keep single line on desktop
  const cellSx = isMobile
    ? { whiteSpace: 'normal', overflowWrap: 'break-word', wordBreak: 'normal', textAlign: 'center' }
    : { whiteSpace: 'nowrap', textAlign: 'center' };

  // Full data as before
  const courses = [
    {
      id: 'hypnobirthing',
      title: 'הכנה ללידה בשיטת היפנובירת\'ינג',
      duration: '2 שעות',
      sessions: '2 מפגשים',
      price: '2500',
      groupMeeting: false,
      insurance: true,
      icon: '🤰'
    },
    {
      id: 'prebreastfeeding',
      title: 'הכנה להנקה',
      duration: '1.5 שעות',
      sessions: '1 מפגש',
      price: '300',
      groupMeeting: true,
      insurance: false,
      icon: '🍼'
    },
    {
      id: 'breastfeeding',
      title: 'הדרכת הנקה',
      duration: '1.5 שעות',
      sessions: '1 מפגש',
      price: '400',
      groupMeeting: false,
      insurance: false,
      icon: '🍼'
    },
    {
      id: 'dunstan',
      title: 'שפת התינוקות דנסטן',
      duration: '2 שעות',
      sessions: '2 מפגשים',
      price: '400',
      groupMeeting: false,
      insurance: false,
      icon: '👶'
    },
    {
      id: 'sleep',
      title: 'ייעוץ שינה בגישת דנסטן',
      duration: '1.5 שעות',
      sessions: '1 מפגש',
      price: '450',
      groupMeeting: false,
      insurance: true,
      icon: '🌙'
    },
    {
      id: 'massage',
      title: 'עיסוי תינוקות',
      duration: '1.5 שעות',
      sessions: '3 מפגשים',
      price: '300',
      groupMeeting: true,
      insurance: false,
      icon: '🧴'
    },
    {
      id: 'weaning',
      title: 'פרידה מהנקה',
      duration: '1.5 שעות',
      sessions: '1 מפגש',
      price: '350',
      groupMeeting: false,
      insurance: false,
      icon: '🍼'
    }
  ];

  return (
    <Container sx={{ py: 4 }} dir={isRTL ? 'rtl' : 'ltr'}>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>{t('pricing.title')}</Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ ...cellSx, textAlign: isRTL ? 'right' : 'left' }}>שם הקורס</TableCell>
              <TableCell sx={cellSx}>שעות המפגש</TableCell>
              <TableCell sx={cellSx}>מספר מפגשים</TableCell>
              <TableCell sx={cellSx}>עלות כוללת</TableCell>
              <TableCell sx={cellSx}>מפגש קבוצתי</TableCell>
              <TableCell sx={cellSx}>החזר מקופת החולים</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {courses.map((c, idx) => (
              <TableRow
                key={c.id}
                id={c.id}
                sx={{
                  backgroundColor: idx % 2 === 0 ? 'rgba(212,165,165,0.04)' : 'inherit',
                  // Do not override hover/selected colors
                  '&:hover': {
                    backgroundColor: 'rgba(212,165,165,0.10)',
                  },
                  '&.Mui-selected, &.Mui-selected:hover': {
                    backgroundColor: 'rgba(212,165,165,0.18)',
                  },
                }}
              >
                <TableCell sx={{ ...cellSx, textAlign: isRTL ? 'right' : 'left' }}>
                  <span style={{
                    fontSize: 20,
                    marginInlineEnd: 8,
                  }}>{c.icon}</span>
                  {c.title}
                </TableCell>
                <TableCell sx={cellSx}>{c.duration}</TableCell>
                <TableCell sx={cellSx}>{c.sessions}</TableCell>
                <TableCell sx={cellSx}>{c.price}</TableCell>
                <TableCell sx={cellSx}>{c.groupMeeting ? 'כן' : '—'}</TableCell>
                <TableCell sx={cellSx}>{c.insurance ? 'כן' : '—'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
