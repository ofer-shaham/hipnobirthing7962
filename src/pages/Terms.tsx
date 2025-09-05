import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FileText, AlertCircle, Users, CreditCard, Shield, Phone } from 'lucide-react';

export const Terms = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'he';

  const sections = [
    {
      icon: <FileText size={24} color="#D4A5A5" />,
      title: 'הגדרות כלליות',
      content: 'השירותים כוללים הכנה ללידה, הדרכת הנקה ועיסוי תינוקות. השימוש מהווה הסכמה לתנאים.'
    },
    {
      icon: <Users size={24} color="#D4A5A5" />,
      title: 'השירותים',
      content: 'קורסי הכנה ללידה, הדרכת הנקה, שפת דנסטן ועיסוי תינוקות על ידי מדריכה מוסמכת.'
    },
    {
      icon: <CreditCard size={24} color="#D4A5A5" />,
      title: 'תשלומים',
      content: 'תשלום מראש. ביטול עד 48 שעות - החזר מלא. פחות מ-24 שעות - ללא החזר.'
    },
    {
      icon: <AlertCircle size={24} color="#D4A5A5" />,
      title: 'אחריות',
      content: 'השירותים למטרות חינוכיות בלבד. אינם תחליף לייעוץ רפואי. יש להתייעץ עם רופא.'
    },
    {
      icon: <Shield size={24} color="#D4A5A5" />,
      title: 'סודיות',
      content: 'המידע נשמר בסודיות מוחלטת ולא מועבר לצדדים שלישיים.'
    },
    {
      icon: <Phone size={24} color="#D4A5A5" />,
      title: 'יצירת קשר',
      content: 'לשאלות: 052-620-5052, maryza1982@gmail.com. החוק הישראלי חל על התנאים.'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }} dir={isRTL ? 'rtl' : 'ltr'}>
      <Typography variant="h2" color="primary" sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold' }}>
        תנאי שירות
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {sections.map((section, index) => (
          <Paper key={index} elevation={2} sx={{ p: 4, borderRadius: '16px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: isRTL ? 'row-reverse' : 'row', gap: 2, mb: 2 }}>
              {section.icon}
              <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
                {section.title}
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ textAlign: isRTL ? 'right' : 'left', lineHeight: 1.6 }}>
              {section.content}
            </Typography>
          </Paper>
        ))}
      </Box>

      <Paper elevation={2} sx={{ p: 4, mt: 4, borderRadius: '16px', backgroundColor: 'rgba(212, 165, 165, 0.1)' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
          <AlertCircle size={24} color="#D4A5A5" />
          <Typography variant="h6" color="primary" sx={{ ml: isRTL ? 0 : 1, mr: isRTL ? 1 : 0, fontWeight: 'bold' }}>
            הודעה חשובה
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ textAlign: 'center', lineHeight: 1.6 }}>
          השירותים מיועדים לתמיכה והדרכה בלבד ואינם תחליף לטיפול רפואי.
        </Typography>
      </Paper>
    </Container>
  );
};