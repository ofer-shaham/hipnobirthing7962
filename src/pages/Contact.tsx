import React from 'react';
import { Container, Typography, Box, Grid, Paper, Link, Divider, IconButton, Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MessageCircle, MapPin, Instagram, Users, Clock, Calendar, ExternalLink, Quote } from 'lucide-react';
import { DebugTooltip } from '../components/Debug/DebugTooltip';

export const Contact = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he';

  const contactMethods = [
    {
      icon: <MessageCircle size={32} color="#D4A5A5" />,
      title: 'WhatsApp',
      value: '052-620-5052',
      link: 'https://wa.me/972526205052',
      description: 'מענה מהיר ונוח',
      primary: true
    },
    {
      icon: <Phone size={32} color="#D4A5A5" />,
      title: 'טלפון',
      value: '052-620-5052',
      link: 'tel:0526205052',
      description: 'זמינה לשיחות בין השעות 9:00-20:00',
      primary: false
    },
    {
      icon: <Mail size={32} color="#D4A5A5" />,
      title: 'אימייל',
      value: 'maryza1982@gmail.com',
      link: 'mailto:maryza1982@gmail.com',
      description: 'מענה תוך 24 שעות',
      primary: false
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram size={28} color="#D4A5A5" />,
      title: 'Instagram',
      handle: '@mariana.shaham',
      link: 'https://www.instagram.com/mariana.shaham/',
      description: 'עדכונים, טיפים ותכנים מועילים',
      followers: '2.5K עוקבים'
    },
    {
      icon: <Users size={28} color="#D4A5A5" />,
      title: 'Facebook',
      handle: '@mary.shaham',
      link: 'https://www.facebook.com/mary.shaham',
      description: 'עמוד הפייסבוק הרשמי',
      followers: '1.8K עוקבים'
    },
    {
      icon: <Users size={28} color="#D4A5A5" />,
      title: 'האיגוד הישראלי למקצועות ההנקה',
      handle: 'פרופיל מקצועי',
      link: 'https://ialp.org.il/counselors/%D7%9E%D7%90%D7%A8%D7%99%D7%90%D7%A0%D7%94-%D7%A9%D7%97%D7%9D/',
      description: 'אישור מקצועי ואמינות',
      verified: true
    }
  ];

  return (
    <Box sx={{ backgroundColor: '#FAFAFA', minHeight: '100vh', py: { xs: 4, md: 8 } }}>
      <Container maxWidth="xl" dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 }, px: 2 }}>
          <DebugTooltip jsonPath="contact.title (i18n)">
            <Typography 
              variant="h1" 
              color="primary" 
              sx={{ 
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                letterSpacing: '-0.02em'
              }}
            >
              {t('contact.title')}
            </Typography>
          </DebugTooltip>
          
          <DebugTooltip jsonPath="contact.subtitle (i18n)">
            <Typography 
              variant="h5" 
              sx={{ 
                color: 'text.secondary',
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6,
                fontWeight: 400,
                fontSize: { xs: '1.1rem', md: '1.25rem' }
              }}
            >
              בחרי את הדרך הנוחה לך ביותר ליצירת קשר
            </Typography>
          </DebugTooltip>
        </Box>

        <Grid container spacing={{ xs: 3, md: 6 }} sx={{ maxWidth: '1400px', mx: 'auto' }}>
          {/* Contact Methods */}
          <Grid item xs={12} lg={8}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: { xs: 4, md: 6 }, 
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #ffffff 0%, #fefefe 100%)',
                border: '1px solid rgba(212, 165, 165, 0.08)',
                boxShadow: '0 8px 32px rgba(212, 165, 165, 0.12)'
              }}
            >
              <Box sx={{ mb: 5 }}>
                <Typography 
                  variant="h3" 
                  color="primary" 
                  sx={{ 
                    fontWeight: 700,
                    textAlign: isRTL ? 'right' : 'left',
                    fontSize: { xs: '1.75rem', md: '2.125rem' },
                    mb: 1
                  }}
                >
                  דרכי התקשרות
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  sx={{ 
                    textAlign: isRTL ? 'right' : 'left',
                    fontSize: '1.1rem'
                  }}
                >
                  בחרי את הדרך הנוחה לך ביותר ליצירת קשר
                </Typography>
              </Box>
              
              <Grid container spacing={4}>
                {contactMethods.map((method, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <IconButton
                      component={Link}
                      href={method.link}
                      target={method.link.startsWith('http') ? '_blank' : undefined}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      sx={{
                        p: 4,
                        borderRadius: '20px',
                        backgroundColor: method.primary ? 'rgba(212, 165, 165, 0.06)' : 'rgba(212, 165, 165, 0.03)',
                        border: method.primary ? '2px solid rgba(212, 165, 165, 0.15)' : '1px solid rgba(212, 165, 165, 0.08)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        height: '100%',
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 20px 40px rgba(212, 165, 165, 0.2)',
                          backgroundColor: method.primary ? 'rgba(212, 165, 165, 0.1)' : 'rgba(212, 165, 165, 0.06)',
                          borderColor: 'rgba(212, 165, 165, 0.25)'
                        },
                        '&::before': method.primary ? {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '4px',
                          background: 'linear-gradient(90deg, #D4A5A5, #E6B89C)',
                          borderRadius: '20px 20px 0 0'
                        } : {}
                      }}
                    >
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'flex-start',
                          flexDirection: isRTL ? 'row-reverse' : 'row',
                          gap: 3
                        }}
                      >
                        <Box
                          sx={{
                            p: 2.5,
                            borderRadius: '16px',
                            backgroundColor: 'rgba(212, 165, 165, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minWidth: '64px',
                            height: '64px',
                            boxShadow: '0 4px 12px rgba(212, 165, 165, 0.15)'
                          }}
                        >
                          {method.icon}
                        </Box>
                        
                        <Box sx={{ flex: 1, textAlign: isRTL ? 'right' : 'left' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                            <Typography 
                              variant="h6" 
                              color="text.primary" 
                              sx={{ 
                                fontWeight: 700,
                                fontSize: '1.1rem'
                              }}
                            >
                              {method.title}
                            </Typography>
                            {method.primary && (
                              <Chip 
                                label="מומלץ" 
                                size="small" 
                                sx={{ 
                                  backgroundColor: 'rgba(212, 165, 165, 0.15)',
                                  color: '#D4A5A5',
                                  fontWeight: 600,
                                  fontSize: '0.75rem'
                                }} 
                              />
                            )}
                          </Box>
                          
                          <Typography 
                            variant="body2" 
                            color="text.secondary"
                            sx={{ 
                              mt: 0.5, 
                              lineHeight: 1.5,
                              fontSize: '0.95rem'
                            }}
                          >
                            {method.description}
                          </Typography>
                        </Box>
                      </Box>
                    </IconButton>
                  </Grid>
                ))}
              </Grid>

              <Divider sx={{ my: 6, backgroundColor: 'rgba(212, 165, 165, 0.15)' }} />

              {/* Location */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: isRTL ? 'row-reverse' : 'row',
                  gap: 4,
                  p: 4,
                  borderRadius: '20px',
                  backgroundColor: 'rgba(212, 165, 165, 0.04)',
                  border: '1px solid rgba(212, 165, 165, 0.1)'
                }}
              >
                <IconButton
                  component={Link}
                  href="https://www.waze.com/he/live-map/directions?from=place.w.22872383.228461684.76297"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    p: 3,
                    borderRadius: '16px',
                    backgroundColor: 'rgba(212, 165, 165, 0.1)',
                    boxShadow: '0 4px 12px rgba(212, 165, 165, 0.15)',
                    color: '#D4A5A5',
                    '&:hover': {
                      backgroundColor: 'rgba(212, 165, 165, 0.2)',
                      transform: 'scale(1.05)'
                    },
                    transition: 'all 0.2s ease'
                  }}
                >
                  <MapPin size={32} />
                </IconButton>
                
                <Box sx={{ flex: 1, textAlign: isRTL ? 'right' : 'left' }}>
                  <Typography variant="h6" color="primary" sx={{ fontWeight: 700, mb: 1, fontSize: '1.1rem' }}>
                    מיקום
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Social Links & Additional Info */}
          <Grid item xs={12} lg={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {/* Social Media */}
              <Paper 
                elevation={0} 
                sx={{ 
                  p: { xs: 4, md: 5 }, 
                  borderRadius: '24px',
                  background: 'linear-gradient(135deg, #ffffff 0%, #fefefe 100%)',
                  border: '1px solid rgba(212, 165, 165, 0.08)',
                  boxShadow: '0 8px 32px rgba(212, 165, 165, 0.12)'
                }}
              >
                <Typography 
                  variant="h4" 
                  color="primary" 
                  sx={{ 
                    mb: 4,
                    fontWeight: 700,
                    textAlign: isRTL ? 'right' : 'left',
                    fontSize: { xs: '1.5rem', md: '1.75rem' }
                  }}
                >
                  עקבו אחריי
                </Typography>
                
                {socialLinks.map((social, index) => (
                  <Box key={index} sx={{ mb: index < socialLinks.length - 1 ? 4 : 0 }}>
                    <Link
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ textDecoration: 'none' }}
                    >
                      <Box
                        sx={{
                          p: 4,
                          borderRadius: '16px',
                          backgroundColor: 'rgba(212, 165, 165, 0.04)',
                          border: '1px solid rgba(212, 165, 165, 0.08)',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          '&:hover': {
                            backgroundColor: 'rgba(212, 165, 165, 0.08)',
                            transform: 'translateY(-4px)',
                            boxShadow: '0 12px 24px rgba(212, 165, 165, 0.15)',
                            borderColor: 'rgba(212, 165, 165, 0.2)'
                          }
                        }}
                      >
                        <Box 
                          sx={{ 
                            display: 'flex', 
                            alignItems: 'center',
                            flexDirection: isRTL ? 'row-reverse' : 'row',
                            gap: 3,
                            mb: 2
                          }}
                        >
                          <Box
                            sx={{
                              p: 1.5,
                              borderRadius: '12px',
                              backgroundColor: 'rgba(212, 165, 165, 0.1)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            {social.icon}
                          </Box>
                          <Box sx={{ flex: 1 }}>
                            <Typography 
                              variant="h6" 
                              color="primary" 
                              sx={{ 
                                fontWeight: 700,
                                fontSize: '1rem',
                                mb: 0.5
                              }}
                            >
                              {social.title}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <Typography 
                                variant="body2" 
                                color="text.primary"
                                sx={{ 
                                  fontWeight: 600,
                                  fontSize: '0.9rem'
                                }}
                              >
                                {social.handle}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        
                        <Typography 
                          variant="body2" 
                          color="text.secondary"
                          sx={{ 
                            mt: 1, 
                            lineHeight: 1.5,
                            fontSize: '0.9rem',
                            mb: social.followers ? 1 : 0
                          }}
                        >
                          {social.description}
                        </Typography>

                        {social.followers && (
                          <Typography 
                            variant="caption" 
                            color="primary"
                            sx={{ 
                              textAlign: isRTL ? 'right' : 'left',
                              fontWeight: 600,
                              fontSize: '0.8rem'
                            }}
                          >
                            {social.followers}
                          </Typography>
                        )}
                      </Box>
                    </Link>
                  </Box>
                ))}
              </Paper>

              {/* Office Hours */}
              <Paper 
                elevation={0} 
                sx={{ 
                  p: { xs: 4, md: 5 }, 
                  borderRadius: '24px',
                  background: 'linear-gradient(135deg, #ffffff 0%, #fefefe 100%)',
                  border: '1px solid rgba(212, 165, 165, 0.08)',
                  boxShadow: '0 8px 32px rgba(212, 165, 165, 0.12)'
                }}
              >
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    flexDirection: isRTL ? 'row-reverse' : 'row',
                    gap: 3,
                    mb: 4
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: '12px',
                      backgroundColor: 'rgba(212, 165, 165, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Clock size={28} color="#D4A5A5" />
                  </Box>
                  <Typography 
                    variant="h5" 
                    color="primary" 
                    sx={{ 
                      fontWeight: 700,
                      fontSize: '1.25rem'
                    }}
                  >
                    שעות פעילות
                  </Typography>
                </Box>
                
                <Box sx={{ textAlign: isRTL ? 'right' : 'left', space: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, p: 2, borderRadius: '8px', backgroundColor: 'rgba(212, 165, 165, 0.04)' }}>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      ימים א׳-ה׳
                    </Typography>
                    <Typography variant="body1" color="primary" sx={{ fontWeight: 600 }}>
                      9:00-20:00
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, p: 2, borderRadius: '8px', backgroundColor: 'rgba(212, 165, 165, 0.04)' }}>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      יום ו׳
                    </Typography>
                    <Typography variant="body1" color="primary" sx={{ fontWeight: 600 }}>
                      9:00-14:00
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, borderRadius: '8px', backgroundColor: 'rgba(158, 158, 158, 0.04)' }}>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      שבת
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 600 }}>
                      סגור
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              {/* Professional Quote */}
              <Paper 
                elevation={0} 
                sx={{ 
                  p: { xs: 4, md: 5 }, 
                  borderRadius: '24px',
                  background: 'linear-gradient(135deg, rgba(212, 165, 165, 0.08) 0%, rgba(212, 165, 165, 0.04) 100%)',
                  border: '1px solid rgba(212, 165, 165, 0.15)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: -20,
                    right: isRTL ? 'auto' : -20,
                    left: isRTL ? -20 : 'auto',
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(212, 165, 165, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Quote size={32} color="#D4A5A5" style={{ opacity: 0.4 }} />
                </Box>
                
                <Typography 
                  variant="body1" 
                  sx={{ 
                    textAlign: isRTL ? 'right' : 'left',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                    color: 'text.primary',
                    fontSize: '1.05rem',
                    mb: 3,
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  "אני כאן ללוות אתכן בכל שלב של המסע - מההריון ועד ההורות המוקדמת. אל תהססו לפנות בכל שאלה או בקשה לייעוץ."
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      width: 4,
                      height: 40,
                      backgroundColor: '#D4A5A5',
                      borderRadius: '2px'
                    }}
                  />
                  <Box>
                    <Typography 
                      variant="body1" 
                      color="primary" 
                      sx={{ 
                        fontWeight: 700,
                        fontSize: '1rem'
                      }}
                    >
                      מאריאנה שחם
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ fontSize: '0.9rem' }}
                    >
                      מדריכת לידה ויועצת הנקה מוסמכת
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};