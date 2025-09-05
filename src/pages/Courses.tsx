import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  List,
  ListItem,
  ListItemText,
  Chip,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Heart, Baby, Moon, Users, Sparkles, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Courses = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he';

  const courses = [
    {
      title: 'הכנה ללידה בשיטת היפנובירת\'ינג',
      description: 'למדי טכניקות לחוויית לידה רגועה ומעצימה',
      image: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      icon: <Heart size={48} color="#D4A5A5" />,
      details: [
        'הבנת הפילוסופיה של היפנובירת\'ינג',
        'טכניקות נשימה ושיטות הרפיה',
        'מעורבות ותמיכה של בן/בת הזוג',
        'הכנה ללידה וויזואליזציה',
        '3 מפגשים אישיים של 2.5 שעות כל אחד'
      ],
      courseId: 'hypnobirthing'
    },
    {
      title: 'הדרכת הנקה',
      description: 'תמיכה מקצועית להנקה מוצלחת',
      image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      icon: <Baby size={48} color="#D4A5A5" />,
      details: [
        'אחיזה ומיקום נכונים',
        'הבנת אספקת החלב',
        'אתגרים נפוצים ופתרונות',
        'הנחיות לשאיבה ואחסון',
        'ייעוץ אישי זמין'
      ],
      courseId: 'breastfeeding'
    },
    {
      title: 'שפת התינוקות דנסטן',
      description: 'הבנת צרכי התינוק באמצעות זיהוי הצלילים הטבעיים שלו',
      image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      icon: <MessageCircle size={48} color="#D4A5A5" />,
      details: [
        'מהי שפת התינוקות',
        'זיהוי הצלילים',
        'הבנת הצלילים',
        'דרכים לביטוי',
        'מענה מותאם לצרכים',
        'עזרה בזיהוי הצרכים',
        'הנחיות וייעוץ אישי זמין לאחר הקורס'
      ],
      courseId: 'dunstan'
    },
    {
      title: 'ייעוץ שינה בגישת דנסטן',
      description: 'ייעוץ שינה בגישת דנסטן לשינה טובה יותר לכל המשפחה',
      image: 'https://images.unsplash.com/photo-1520206183501-b80df61043c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      icon: <Moon size={48} color="#D4A5A5" />,
      details: [
        'זיהוי הצורך',
        'סימנים מקדימים לשינה',
        'כלים ומעקב להבנת תבנית הירדמות',
        'טכניקות להרדמה עם מעורבות הורית'
      ],
      courseId: 'sleep'
    },
    {
      title: 'עיסוי תינוקות',
      description: 'טכניקות עיסוי לחיזוק הקשר עם התינוק ולהרגעתו',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: <Users size={48} color="#D4A5A5" />,
      details: [
        '3 מפגשים של שעה וחצי כל אחד',
        'טכניקות עיסוי מעשיות',
        'חיזוק הקשר עם התינוק',
        'הרגעה וטיפוח'
      ],
      courseId: 'massage'
    },
    {
      title: 'פרידה מהנקה',
      description: 'ליווי מקצועי בתהליך הפרידה מההנקה בצורה הדרגתית ומכילה',
      image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      icon: <Sparkles size={48} color="#D4A5A5" />,
      details: [
        'זיהוי בשלות לפרידה',
        'ביצוע פרידה בצורה אפקטיבית',
        'אתגרים נפוצים בפרידה מהנקה',
        'טכניקות לפרידה בצורה מכילה ותומכת'
      ],
      courseId: 'weaning'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }} dir={isRTL ? 'rtl' : 'ltr'}>
      <Typography variant="h2" gutterBottom color="primary" textAlign="center" sx={{ mb: 6 }}>
        {t('courses.title')}
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {courses.map((course, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card 
              elevation={3} 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '20px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(212, 165, 165, 0.2)'
                }
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={course.image}
                alt={course.title}
                sx={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
              <CardContent sx={{ flexGrow: 1, p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  {course.icon}
                  <Typography
                    variant="h4"
                    color="primary"
                    sx={{ 
                      textAlign: isRTL ? 'right' : 'left',
                      fontWeight: 'bold',
                      fontSize: '1.5rem'
                    }}
                  >
                    {course.title}
                  </Typography>
                </Box>
                
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ 
                    textAlign: isRTL ? 'right' : 'left',
                    lineHeight: 1.6,
                    mb: 3
                  }}
                >
                  {course.description}
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Typography 
                    variant="h6" 
                    color="primary" 
                    sx={{ 
                      mb: 2, 
                      textAlign: isRTL ? 'right' : 'left',
                      fontWeight: 'bold'
                    }}
                  >
                    מה כלול:
                  </Typography>
                  <List sx={{ pl: isRTL ? 0 : 2, pr: isRTL ? 2 : 0 }}>
                    {course.details.map((detail, idx) => (
                      <ListItem
                        key={idx}
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          textAlign: isRTL ? 'right' : 'left',
                          py: 0.5,
                          px: 0
                        }}
                      >
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            backgroundColor: 'primary.main',
                            mt: 1,
                            mr: isRTL ? 0 : 2,
                            ml: isRTL ? 2 : 0,
                            flexShrink: 0
                          }}
                        />
                        <ListItemText
                          primary={detail}
                          primaryTypographyProps={{
                            sx: { 
                              textAlign: isRTL ? 'right' : 'left',
                              fontSize: '0.95rem'
                            }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
                
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  component={Link}
                  to={`/pricing#${course.courseId}`}
                  sx={{ 
                    mt: 'auto',
                    borderRadius: '12px',
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 12px rgba(212, 165, 165, 0.3)',
                    '&:hover': {
                      boxShadow: '0 6px 16px rgba(212, 165, 165, 0.4)'
                    }
                  }}
                >
                  צפה במחיר
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};