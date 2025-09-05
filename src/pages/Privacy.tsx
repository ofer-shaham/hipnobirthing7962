import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Shield, Eye, Lock, UserCheck, FileText, Mail } from 'lucide-react';

export const Privacy = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'he';

  const sections = [
    {
      icon: <Shield size={24} color="#D4A5A5" />,
      title: 'מדיניות פרטיות',
      content: 'אתר זה אינו אוסף, שומר או מעבד מידע אישי של המשתמשים. כל התקשרות מתבצעת באמצעים חיצוניים (טלפון, אימייל, WhatsApp) ואינה עוברת דרך האתר.'
    },
    {
      icon: <FileText size={24} color="#D4A5A5" />,
      title: 'תנאי שירות',
      content: 'השירותים כוללים הכנה ללידה, הדרכת הנקה ועיסוי תינוקות. השימוש באתר מהווה הסכמה לתנאים אלה.'
    },
    {
      icon: <UserCheck size={24} color="#D4A5A5" />,
      title: 'השירותים המוצעים',
      content: 'קורסי הכנה ללידה, הדרכת הנקה, שפת דנסטן ועיסוי תינוקות על ידי מדריכה מוסמכת. השירותים למטרות חינוכיות בלבד.'
    },
    {
      icon: <Eye size={24} color="#D4A5A5" />,
      title: 'תשלומים וביטולים',
      content: 'תשלום מראש נדרש. ביטול עד 48 שעות לפני המפגש - החזר מלא. ביטול פחות מ-24 שעות - ללא החזר.'
    },
    {
      icon: <Lock size={24} color="#D4A5A5" />,
      title: 'אחריות וסודיות',
      content: 'השירותים אינם תחליף לייעוץ רפואי. יש להתייעץ עם רופא. המידע נשמר בסודיות מוחלטת.'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }} dir={isRTL ? 'rtl' : 'ltr'}>
      <Typography variant="h2" color="primary" sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold' }}>
        מדיניות פרטיות
        <br />
        ותנאי שירות
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {sections.map((section, index) => (
          <Paper key={index} elevation={2} sx={{ p: 4, borderRadius: '16px' }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              flexDirection: isRTL ? 'row-reverse' : 'row', 
              gap: 2, 
              mb: 2,
              textAlign: isRTL ? 'right' : 'left'
            }}>
              {section.icon}
              <Typography variant="h5" color="primary" sx={{ 
                fontWeight: 'bold',
                textAlign: isRTL ? 'right' : 'left'
              }}>
                {section.title}
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ 
              textAlign: isRTL ? 'right' : 'left', 
              lineHeight: 1.6,
              direction: isRTL ? 'rtl' : 'ltr'
            }}>
              {section.content}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};