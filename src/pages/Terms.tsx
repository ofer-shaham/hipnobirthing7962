import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FileText, AlertCircle, Users, CreditCard, Shield, Phone } from 'lucide-react';

export const Terms = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he';

  const sections = [
    {
      icon: <FileText size={24} color="#D4A5A5" />,
      title: t('terms.sections.general.title'),
      content: t('terms.sections.general.content')
    },
    {
      icon: <Users size={24} color="#D4A5A5" />,
      title: t('terms.sections.services.title'),
      content: t('terms.sections.services.content')
    },
    {
      icon: <CreditCard size={24} color="#D4A5A5" />,
      title: t('terms.sections.payments.title'),
      content: t('terms.sections.payments.content')
    },
    {
      icon: <AlertCircle size={24} color="#D4A5A5" />,
      title: t('terms.sections.liability.title'),
      content: t('terms.sections.liability.content')
    },
    {
      icon: <Shield size={24} color="#D4A5A5" />,
      title: t('terms.sections.privacy.title'),
      content: t('terms.sections.privacy.content')
    },
    {
      icon: <Phone size={24} color="#D4A5A5" />,
      title: t('terms.sections.contact.title'),
      content: t('terms.sections.contact.content')
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }} dir={isRTL ? 'rtl' : 'ltr'}>
      <Typography variant="h2" color="primary" sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold' }}>
        {t('terms.title')}
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {sections.map((section, index) => (
          <Paper key={index} elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              {section.icon}
              <Typography variant="h6" color="primary" sx={{ ml: isRTL ? 0 : 2, mr: isRTL ? 2 : 0, fontWeight: 'bold' }}>
                {section.title}
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
              {section.content}
            </Typography>
          </Paper>
        ))}
      </Box>

      <Paper elevation={3} sx={{ p: 3, mt: 4, borderRadius: 2, backgroundColor: '#FFF8E1' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
          <AlertCircle size={24} color="#D4A5A5" />
          <Typography variant="h6" color="primary" sx={{ ml: isRTL ? 0 : 1, mr: isRTL ? 1 : 0, fontWeight: 'bold' }}>
            {t('terms.importantNotice.title')}
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ textAlign: 'center', lineHeight: 1.6 }}>
          {t('terms.importantNotice.content')}
        </Typography>
      </Paper>
    </Container>
  );
};